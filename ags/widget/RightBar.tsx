import { Variable, Gtk } from "astal";
import Tray from "./Tray";
import Time from "./Time";
import Media from "./Media";
import Workspaces from "./Workspaces";

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

        <box vertical>
          <box className="Container">
            <Workspaces />
          </box>
        </box>

        <box vertical>
          <box vexpand />
          <box className="Container">
            <Media />
          </box>
          <box className="Separator" />
          <box className="Container">
            <Tray />
          </box>
        </box>
      </centerbox>
    </window>
  );
}
