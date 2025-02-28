import Hyprland from "gi://AstalHyprland";
import { Variable, bind, exec } from "astal";

const hyprland = Hyprland.get_default();
export const multipleWindows = Variable(false);

export function automate() {
    hyprland.connect("event", () => {
        let found = 0;
        for (const client of hyprland.get_clients()) {
            if (client.workspace == hyprland.get_focused_workspace() && !client.floating) {
                found++;
            }
        }

        if (found > 1 || hyprland.get_focused_workspace().name == "special") {
            exec(`hyprctl --batch 'keyword general:gaps_out 8;
                keyword general:gaps_in 4; 
                keyword general:border_size 2;'`);
            multipleWindows.set(true);
        } else {
            exec(`hyprctl --batch 'keyword general:gaps_out 0; 
                keyword general:gaps_in 0; 
                keyword general:border_size 0;'`);
            multipleWindows.set(false);
        }
    })
}

