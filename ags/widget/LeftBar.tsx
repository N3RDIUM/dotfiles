import { App, Variable, Astal, Gtk } from "astal";

export default function LeftBar() {
  return (
    <window
      className="Bar Left"
      monitor={0}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={
        Astal.WindowAnchor.LEFT |
        Astal.WindowAnchor.TOP |
        Astal.WindowAnchor.BOTTOM
      }
      application={App}
    >
      <centerbox vertical hexpand>
        <box vertical>
          <box className="Container"></box>
          <box className="Separator" />
          <box className="Container"></box>
        </box>

        <box vertical>
          <box className="Container"></box>
          <box className="Separator" />
          <box className="Container"></box>
        </box>

        <box vertical>
          <box vexpand />
          <box className="Container"></box>
          <box className="Separator" />
          <box className="Container"></box>
        </box>
      </centerbox>
    </window>
  );
}
