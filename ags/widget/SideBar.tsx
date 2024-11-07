import Tray from "./Tray";
import Time from "./Time";
import Media from "./Media";
import Workspaces from "./Workspaces";

import { App } from "astal/gtk3";
import { Astal } from "astal/gtk3";

export default function SideBar() {
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
      <box className={"BarContainer"} vertical hexpand>
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

        <box className="Separator" />

        <box className="Container">
          <Media />
        </box>

        <box vertical vexpand hexpand />

        <box className="Container">
          <Workspaces />
        </box>

        <box className="Separator" />

        <box className="Container">
          <Tray />
        </box>
      </box>
    </window>
  );
}
