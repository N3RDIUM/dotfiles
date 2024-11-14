import { App } from "astal/gtk3";
import style from "./style.css";
import SideBar from "./widget/SideBar";
import { Pane, visibleName, showPane } from "./widget/Pane";

App.start({
  css: style,
  main() {
    SideBar();
    Pane();
  },
  requestHandler(req, res) {
    if (req.includes("pane")) {
      let cmd = req.replace("pane ", "");
      if (cmd == "show") {
        showPane.set(true);
      } else if (cmd == "hide") {
        showPane.set(false);
      } else if (cmd == "toggle") {
        showPane.set(!showPane.get());
      } else {
        if (showPane.get() && visibleName.get() == cmd) {
          showPane.set(false);
        } else if (!showPane.get() && visibleName.get() == cmd) {
          showPane.set(true);
        } else if (showPane.get() && visibleName.get() != cmd) {
          visibleName.set(cmd);
        } else if (!showPane.get() && visibleName.get() != cmd) {
          visibleName.set(cmd);
          showPane.set(true);
        }
      }
      res("ok");
    }
  },
});
