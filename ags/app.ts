import { App } from "astal/gtk3";
import style from "./style.css";
import SideBar from "./widget/SideBar";

App.start({
  css: style,
  main() {
    SideBar();
  },
});
