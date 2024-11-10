import { App, Astal, Gtk } from "astal/gtk3";
import { Variable, bind } from "astal";

const showPane = Variable(false);
const visibleName = Variable("NixOS");

// Thanks, Aylur!
function StackSwitcher({ children }: { children?: Array<JSX.Element> }) {
  if (children!.some((ch) => !ch.name))
    throw Error("Every child must have a name");
  visibleName.set(children![0].name);

  return (
    <box>
      <box vertical>
        {children!.map((ch) => (
          <button onClick={() => visibleName.set(ch.name)}>{ch.name}</button>
        ))}
      </box>
      <stack
        hexpand
        vexpand
        transition_type={Gtk.StackTransitionType.SLIDE_UP_DOWN}
        transitionDuration={64}
        visibleChildName={visibleName()}
      >
        {children}
      </stack>
    </box>
  );
}

export default function Pane() {
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
        transition_type={Gtk.RevealerTransitionType.SLIDE_RIGHT}
        transition_duration={128}
        reveal_child={bind(showPane)}
      >
        <box className={"PaneContainer"} vertical hexpand vexpand>
          <StackSwitcher>
            <box name="NixOS">Nick's OS</box>
            <box name="Time">Time</box>
            <box name="Calendar">Calendar</box>
          </StackSwitcher>
        </box>
      </revealer>
    </window>
  );
}
