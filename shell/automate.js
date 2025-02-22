import Hyprland from "gi://AstalHyprland";
import { bind, exec } from "astal";

const hyprland = Hyprland.get_default();

export default function automate() {
    hyprland.connect("event", () => {
        let found = 0;
        for (const client of hyprland.get_clients()) {
            if (client.workspace == hyprland.get_focused_workspace()) {
                found++;
            }
        }

        if (found > 1) {
            exec("hyprctl --batch 'keyword general:gaps_out 8'");
            exec("hyprctl --batch 'keyword general:gaps_in 4'");
            exec("hyprctl --batch 'keyword general:border_size 2'");
            exec("hyprctl --batch 'keyword decoration:rounding_power 10.0'");
        } else {
            exec("hyprctl --batch 'keyword general:gaps_out 0'");
            exec("hyprctl --batch 'keyword general:gaps_in 0'");
            exec("hyprctl --batch 'keyword general:border_size 0'");
            exec("hyprctl --batch 'keyword decoration:rounding_power 0.0'");
        }
    })
}
