import { App } from "astal/gtk3";
import style from "./style.css";
import SideBar from "./widget/SideBar";
import Pane from "./widget/Pane";

App.start({
  css: style,
  main() {
    SideBar();
    Pane();
  },
});
