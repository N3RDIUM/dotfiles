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
        <box />
        <centerbox className="Separator" />
        <box />
        <centerbox hexpand className="Break" />
        <box />
      </centerbox>
    </window>
  );
}
