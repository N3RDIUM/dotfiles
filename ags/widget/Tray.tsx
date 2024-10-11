import AstalTray from "gi://AstalTray";
import { App, Variable, Astal, Gtk, bind } from "astal";

const tray = AstalTray.Tray.get_default();
for (const item of tray.get_items()) {
  print(item.title);
}

export default function Tray() {
  return <box vertical className={"Tray"}></box>;
}
