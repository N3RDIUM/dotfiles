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
        <box hexpand />
        <label label={"42."} />
        <box hexpand />
      </centerbox>
    </window>
  );
}
