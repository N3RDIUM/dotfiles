import { App, Astal, Gtk } from "astal/gtk3";
import { Variable, bind } from "astal";

export const showPane = Variable(false);
export const visibleName = Variable("NixOS");

// Thanks, Aylur!
function StackSwitcher({ children }: { children?: Array<JSX.Element> }) {
  if (children!.some((ch) => !ch.name))
    throw Error("Every child must have a name");
  visibleName.set(children![0].name);

  return (
    <box>
      <stack
        hexpand
        vexpand
        transition_type={Gtk.StackTransitionType.SLIDE_UP_DOWN}
        transitionDuration={42}
        visibleChildName={visibleName()}
      >
        {children}
      </stack>
    </box>
  );
}

export function Pane() {
  return (
    <window
      className="Pane Right"
      monitor={0}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={
        Astal.WindowAnchor.RIGHT |
        Astal.WindowAnchor.TOP |
        Astal.WindowAnchor.BOTTOM
      }
      application={App}
    >
      <revealer
        transition_type={Gtk.RevealerTransitionType.SLIDE_LEFT}
        transition_duration={128}
        reveal_child={bind(showPane)}
      >
        <box className={"PaneContainer"} vertical hexpand vexpand>
          <StackSwitcher>
            <box name="NixOS" vertical>
              <icon className={"NixOS-PaneIcon"} icon={"./assets/nixos.svg"} />
              <box hexpand className={"dashboard-container"}>
                <button className="pane-1x1">
                  <box className="avatar"></box>
                </button>
                <button className="pane-1x1">
                  <label className="icon-1x1" label=""></label>
                </button>
                <button className="pane-1x1">
                  <label className="icon-1x1" label=""></label>
                </button>
                <button className="pane-1x1">
                  <label className="icon-1x1" label=""></label>
                </button>
              </box>
            </box>

            <box name="Time">Time</box>
            <box name="Calendar">Calendar</box>
          </StackSwitcher>
        </box>
      </revealer>
    </window>
  );
}
