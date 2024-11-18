import { Astal, Gdk, Gtk, Widget } from "astal/gtk3";
import { bind, Variable } from "astal";
import AstalTray from "gi://AstalTray";

const tray = AstalTray.get_default();
export const trayVisible = Variable(true);

const TrayItem = (id: string, item: AstalTray.TrayItem) => {
  const menu = item.create_menu();

  const onClick: Widget.ButtonProps["onClick"] = (_, e) => {
    if (e.button === Gdk.BUTTON_PRIMARY) {
      item.activate(Gdk.Screen.width() / 2, Gdk.Screen.height() / 2);
    } else if (e.button === Gdk.BUTTON_SECONDARY) {
      menu?.popup_at_pointer(null);
    } else if (e.button === Gdk.BUTTON_MIDDLE) {
      item.secondary_activate(Gdk.Screen.width() / 2, Gdk.Screen.height() / 2);
    }
  };

  return (
    <button name={id} className="TrayItem" onClick={onClick}>
      <icon
        icon={bind(item, "iconName").as((name) => name ?? "")}
        pixbuf={bind(item, "iconPixbuf")}
      />
    </button>
  );
};

export const Tray = () => {
  let itemAddedId: number | null = null;
  let itemRemovedId: number | null = null;

  const setup = (self: Widget.Box) => {
    self.children = tray.get_items().map((item) => TrayItem(item.itemId, item));
    console.log(self.children, self.children.length);
    trayVisible.set(self.children.length > 0);

    itemAddedId = tray.connect("item-added", (_, itemId) =>
      self.add(TrayItem(itemId, tray.get_item(itemId))),
    );
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

  return (
    <box
      orientation={Gtk.Orientation.VERTICAL}
      spacing={8}
      setup={setup}
      onDestroy={onDestroy}
    />
  );
};
