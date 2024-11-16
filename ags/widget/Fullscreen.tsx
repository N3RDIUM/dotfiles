import { App, Astal, Gtk } from "astal/gtk3";
import { Variable, bind } from "astal";

export const showFullscreen = Variable(false);
export const fullscreenVisibleName = Variable("Shutdown");

// Thanks, Aylur!
function StackSwitcher({ children }: { children?: Array<JSX.Element> }) {
  if (children!.some((ch) => !ch.name))
    throw Error("Every child must have a name");
  fullscreenVisibleName.set(children![0].name);

  return (
    <box>
      <stack
        hexpand
        vexpand
        transition_type={Gtk.StackTransitionType.SLIDE_UP_DOWN}
        transitionDuration={42}
        visibleChildName={fullscreenVisibleName()}
      >
        {children}
      </stack>
    </box>
  );
}

export function Fullscreen() {
  return (
    <window
      className="Fullscreen"
      monitor={0}
      visible={bind(showFullscreen)}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={
        Astal.WindowAnchor.LEFT |
        Astal.WindowAnchor.RIGHT |
        Astal.WindowAnchor.TOP |
        Astal.WindowAnchor.BOTTOM
      }
      application={App}
    >
      <revealer
        transition_type={Gtk.RevealerTransitionType.SLIDE_DOWN}
        transition_duration={512}
        reveal_child={bind(showFullscreen)}
      >
        <box className={"FullscreenContainer"} vertical hexpand vexpand>
          <StackSwitcher>
            <box name="Shutdown"></box>
            <box name="Reboot"></box>
          </StackSwitcher>
        </box>
      </revealer>
    </window>
  );
}
