import Tray from "gi://AstalTray";
import { App, Variable, Astal, Gtk, bind } from "astal";

export default function Tray() {
  const tray = Tray.get_default();
  for (const item of tray.get_items()) {
    print(item.title);
  }
}
