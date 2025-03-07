import { Astal, Gdk, Gtk, Widget } from "astal/gtk3";
import { bind, Variable } from "astal";
import AstalTray from "gi://AstalTray";

const tray = AstalTray.get_default();

const TrayItem = (id, item) => {
    return <button name={id} className="TrayItem">
        <icon
            icon={bind(item, "iconName").as((name) => name ?? "")}
            pixbuf={bind(item, "iconPixbuf")}
        />
    </button>
};

export function Tray () {
    let itemAddedId = null;
    let itemRemovedId = null;

    const setup = (self) => {
        self.children = tray.get_items().map((item) => TrayItem(item.itemId, item));

        itemAddedId = tray.connect("item-added", (_, itemId) => {
            self.add(TrayItem(itemId, tray.get_item(itemId)));
        });
        itemRemovedId = tray.connect("item-removed", (_, itemId) => {
            const widget = self.children.find((w) => w.name === itemId);
            widget?.destroy();
        });
    };

    const onDestroy = () => {
        if (itemAddedId) {
            tray.disconnect(itemAddedId);
        }
        if (itemRemovedId) {
            tray.disconnect(itemRemovedId);
        }
    };

    return <box
        vertical
        setup={setup}
        onDestroy={onDestroy}
        className="Tray"
    />
};

export function TrayWidgets() {
    return <box
        vertical
        className="TrayWidgets"
    />
}

