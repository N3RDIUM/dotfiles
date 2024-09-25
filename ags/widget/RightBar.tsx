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
        <box hexpand />
        <label label={"42."} />
        <box hexpand />
      </centerbox>
    </window>
  );
}
