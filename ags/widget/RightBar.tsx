import { App, Variable, Astal, Gtk } from "astal";

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
        <box />
        <centerbox className="Separator" />
        <box />
        <centerbox hexpand className="Break" />
        <box />
      </centerbox>
    </window>
  );
}
