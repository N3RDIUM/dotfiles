import Mpris from "gi://AstalMpris";
import { bind, Variable, execAsync } from "astal";
import { App, Astal, Gtk } from "astal/gtk3";

const mediaVisible = Variable(false);
const visiblePlayer = Variable("default");

function Player({ player }: { player?: Mpris.Player }) {
    let itemUpdateId: number | null = null;

    const coverart = Variable(
        player.get_cover_art() != null ? player.get_cover_art() : "kitty",
    );
    itemUpdateId = player.connect("notify", () => {
        coverart.set(
            player.get_cover_art() != null ? player.get_cover_art() : "kitty",
        );
    });

    return (
        <button
            className="PlayerArt"
            name={player.get_trackid()}
            onClick={() => {
                execAsync("ags request 'pane Media'");
            }}
        >{ /* TODO: Use box and background-image instead for object-fit and rounded corners */}
            <icon
                icon={coverart()}
            />
        </button>
    );
}

export default function Media() {
    const mpris = new Mpris.Mpris();
    const children = Variable([
        <box name="default" />,
    ]);

    let itemAddedId: number | null = null;
    let itemRemovedId: number | null = null;

    const setup = (self) => {
        children.set(
            mpris.get_players().map((player) => (
                <Player player={player}></Player>
            )),
        );
        mediaVisible.set(children.get().length != 0);

        mpris.get_players().forEach((player) => {
            if (visiblePlayer.get() == "default") {
                visiblePlayer.set(player.get_trackid());
            }
        });

        itemAddedId = mpris.connect("player-added", (_, player) => {
            children.set(
                mpris.get_players().map((player) => (
                    <Player player={player}></Player>
                )),
            );
            mediaVisible.set(children.get().length != 0);

            mpris.get_players().forEach((player) => {
                if (visiblePlayer.get() == "default") {
                    visiblePlayer.set(player.get_trackid());
                }
            });
            mediaVisible.set(true);
        });
        itemRemovedId = mpris.connect("player-closed", (_, player) => {
            children.set(
                mpris.get_players().map((player) => (
                    <Player player={player}></Player>
                )),
            );
            mediaVisible.set(children.get().length != 0);

            mpris.get_players().forEach((player) => {
                if (visiblePlayer.get() == "default") {
                    visiblePlayer.set(player.get_trackid());
                }
            });
            mediaVisible.set(self.children.length != 0);
        });
    };

    const onDestroy = () => {
        if (itemAddedId) {
            mpris.disconnect(itemAddedId);
        }
        if (itemRemovedId) {
            mpris.disconnect(itemRemovedId);
        }
    };

    return (
        <box
            className="Players"
            vertical
            visible={mediaVisible()}
            setup={setup}
            onDestroy={onDestroy}
        >
            <stack
                transition_type={Gtk.StackTransitionType.SLIDE_UP_DOWN}
                transitionDuration={512}
                visibleChildName={visiblePlayer()}
                children={children()}
            >
            </stack>
        </box>
    );
}
