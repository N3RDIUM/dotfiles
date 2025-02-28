import { App, Astal } from "astal/gtk3";
import { Variable, bind } from "astal";

export default function shybar(multipleWindows) {
    return <window
            className = "ShyBar"
            monitor = {0}
            exclusivity = {Astal.Exclusivity.EXCLUSIVE}
            anchor = {
                Astal.WindowAnchor.RIGHT |
                Astal.WindowAnchor.TOP |
                Astal.WindowAnchor.BOTTOM
            }
            application={App}
        >
            <box className = { bind(multipleWindows).as(value => value ? "BarContainer ConditionalMargin" : "BarContainer" ) }>
            </box>
        </window>;
}

