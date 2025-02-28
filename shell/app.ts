import { App } from "astal/gtk3";
import style from "./style.css";
import shybar from "./shybar/shybar.js";
import { multipleWindows, automate } from "./automate.js";

App.start({
    css: style,
    main() {
        shybar(multipleWindows); 
        automate();
    },
    requestHandler(req, res) {
        res("ok");
    },
});

