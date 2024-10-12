import AstalTray from "gi://AstalTray";
import { App, Variable, Astal, Gtk, bind } from "astal";

const tray = AstalTray.Tray.get_default();
print(tray.get_items());

export default function Tray() {
  return (
    <box vertical className={"Tray"}>
      {tray.get_items().map((item) => {
        <icon icon={item.get_icon_name()} />;
      })}
    </box>
  );
}
