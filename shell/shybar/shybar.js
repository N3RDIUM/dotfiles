import { App, Astal } from "astal/gtk3";

export default function shybar() {
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
        </window>;
}

