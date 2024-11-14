import Tray from "./Tray";
import Time from "./Time";
import Media from "./Media";
import Dock from "./Dock";
import Workspaces from "./Workspaces";

import { App, Astal } from "astal/gtk3";
import { execAsync } from "astal";

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
          <button
            className={"NixOS-Button"}
            onClick={() => {
              execAsync("ags request 'pane NixOS'");
            }}
          >
            <icon
              className={"NixOS-Icon"}
              icon={"/home/n3rdium/.dotfiles/ags/assets/nixos.svg"}
            />
          </button>
        </box>

        <box className="Separator" />

        <box className="Container">
          <button
            className={"VerticalButton"}
            onClick={() => {
              execAsync("ags request 'pane Time'");
            }}
          >
            <Time />
          </button>
        </box>

        <box className="Separator" />

        <box className="Container">
          <Media />
        </box>

        <box className="Separator" />

        <box className="Container">
          <Dock />
        </box>

        <box vertical vexpand hexpand />

        {/* <box className="Container"> */}
        {/* <Workspaces /> */}
        {/* </box> */}

        <box className="Separator" />

        <box className="Container Tray">
          <Tray />
        </box>
      </box>
    </window>
  );
}
