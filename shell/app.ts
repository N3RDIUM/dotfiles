import { App } from "astal/gtk3";
import style from "./style.css";

App.start({
    css: style,
    main() {
        // sidebar()
    },
    requestHandler(req, res) {
        res("ok");
    },
});

