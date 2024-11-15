import Hyprland from "gi://AstalHyprland";
import { Variable, bind } from "astal";
import Apps from "gi://AstalApps";

const hyprland = Hyprland.get_default();
const apps = new Apps.Apps({
  nameMultiplier: 2,
  entryMultiplier: 0,
  executableMultiplier: 2,
});

const ALIASES = { "dev.zed.Zed": "zed" };

export default function Dock() {
  const clients = Variable.derive(
    [bind(hyprland, "clients"), bind(hyprland, "focusedWorkspace")],
    (clients, workspace) => {
      let ret = [];

      for (let client of clients) {
        if (client.workspace == workspace) {
          let icon = "kitty";
          let cls = client.class;
          if (cls in ALIASES) {
            cls = ALIASES[cls];
          }

          for (let app of apps.fuzzy_query(cls)) {
            icon = app.get_icon_name();
            break;
          }

          ret.push(
            <button className="dockIcon">
              <icon icon={icon}></icon>
            </button>,
          );
        }
      }

      return (
        <box vertical homogeneous>
          {ret.map((item) => item)}
        </box>
      );
    },
  );

  return (
    <box>
      <box className="dock" hexpand child={bind(clients)} />
      <box />
    </box>
  );
}
