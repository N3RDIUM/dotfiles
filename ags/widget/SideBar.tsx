import { Tray, trayVisible } from "./Tray";
import Time from "./Time";
import Media from "./Media";
import { Dock, dockVisible } from "./Dock";
import Workspaces from "./Workspaces";

import { App, Astal } from "astal/gtk3";
import { bind, execAsync } from "astal";

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
          <Workspaces />
        </box>

        <box className="Separator" visible={bind(dockVisible)} />

        <box className="Container" visible={bind(dockVisible)}>
          <Dock />
        </box>

        <box className="Separator" />

        <box vertical vexpand hexpand />

        <box className="Separator" />

        {/* <box className="Container">
          <Media />
        </box> */}

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

        <box className="Separator" visible={bind(trayVisible)} />

        <box className="Container Tray" visible={bind(trayVisible)}>
          <Tray />
        </box>
      </box>
    </window>
  );
}
