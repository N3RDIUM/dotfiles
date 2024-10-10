import { App, Variable, Astal, Gtk } from "astal";
import Time from "./Time";
import Day from "./Day";

export default function RightBar() {
  return (
    <window
      className="Bar Right"
      monitor={0}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={
        Astal.WindowAnchor.RIGHT |
        Astal.WindowAnchor.TOP |
        Astal.WindowAnchor.BOTTOM
      }
      application={App}
    >
      <centerbox vertical hexpand>
        <box vertical>
          <box className="Container">
            <Time />
          </box>
          <box className="Separator" />
          <box className="Container">
            <Day />
          </box>
        </box>

        <box vertical></box>

        <box vertical>
          {/**<box vexpand />
          <box className="Container"></box>
          <box className="Separator" />
          <box className="Container"></box>**/}
        </box>
      </centerbox>
    </window>
  );
}
