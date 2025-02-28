import { Astal, Gdk, Gtk, Widget } from "astal/gtk3";
import { bind, Variable } from "astal";
import AstalTray from "gi://AstalTray";

const tray = AstalTray.get_default();
export const trayVisible = Variable(true);

const TrayItem = (id, item) => {
  return (
    <button name={id} className="TrayItem">
      <icon
        icon={bind(item, "iconName").as((name) => name ?? "")}
        pixbuf={bind(item, "iconPixbuf")}
      />
    </button>
  );
};

export const Tray = () => {
  let itemAddedId = null;
  let itemRemovedId = null;

  const setup = (self) => {
    self.children = tray.get_items().map((item) => TrayItem(item.itemId, item));
    trayVisible.set(self.children.length != 0);

    itemAddedId = tray.connect("item-added", (_, itemId) => {
      self.add(TrayItem(itemId, tray.get_item(itemId)));
      trayVisible.set(true);
    });
    itemRemovedId = tray.connect("item-removed", (_, itemId) => {
      const widget = self.children.find((w) => w.name === itemId);
      widget?.destroy();

      trayVisible.set(self.children.length != 0);
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

  return (
    <box
      vertical
      setup={setup}
      onDestroy={onDestroy}
      className="Tray"
    />
  );
};
