import { App } from "astal";
import style from "inline:./style.css";
import RightBar from "./widget/RightBar";
import LeftBar from "./widget/LeftBar";

App.start({
  css: style,
  main() {
    RightBar();
    LeftBar();
  },
});
