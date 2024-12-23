import { App } from "astal/gtk3";
import style from "./style.css";
import SideBar from "./widget/SideBar";
import { Pane, visibleName, showPane } from "./widget/Pane";
import {
  Fullscreen,
  fullscreenVisibleName,
  showFullscreen,
} from "./widget/Fullscreen";

App.start({
  css: style,
  main() {
    SideBar();
    Pane();
    Fullscreen();
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

    if (req.includes("fullscreen")) {
      let cmd = req.replace("fullscreen ", "");
      if (cmd == "show") {
        showFullscreen.set(true);
      } else if (cmd == "hide") {
        showFullscreen.set(false);
      } else if (cmd == "toggle") {
        showFullscreen.set(!showPane.get());
      } else {
        if (showFullscreen.get() && fullscreenVisibleName.get() == cmd) {
          showFullscreen.set(false);
        } else if (
          !showFullscreen.get() &&
          fullscreenVisibleName.get() == cmd
        ) {
          showFullscreen.set(true);
        } else if (showFullscreen.get() && fullscreenVisibleName.get() != cmd) {
          visibleName.set(cmd);
        } else if (
          !showFullscreen.get() &&
          fullscreenVisibleName.get() != cmd
        ) {
          fullscreenVisibleName.set(cmd);
          showFullscreen.set(true);
        }
      }
      res("ok");
    }
  },
});
