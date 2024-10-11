import { App, Variable, Astal, Gtk } from "astal";
import Tray from "gi://AstalTray";
import Time from "./Time";

const tray = Tray.get_default();

for (const item of tray.get_items()) {
  print(item.title);
}

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
            <button className={"NixOS-Button"}>
              <icon
                className={"NixOS-Icon"}
                icon={"/home/n3rdium/.dotfiles/ags/assets/nixos.svg"}
              />
            </button>
          </box>
          <box className="Separator" />
          <box className="Container">
            <button className={"VerticalButton"}>
              <Time />
            </button>
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
