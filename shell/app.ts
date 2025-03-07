import { App } from "astal/gtk3";
import style from "./style.css";
import shybar from "./shybar/shybar.js";
import whatcook from "./whatcook/whatcook.js";

App.start({
    css: style,
    main() {
        shybar(); 
        whatcook();
    },
    requestHandler(req, res) {
        res("ok");
    },
});

