import Mpris from "gi://AstalMpris";

const mpris = new Mpris.Mpris();
let players = mpris.get_players();

export default function Media() {
  return (
    <box vertical>
      <icon icon="kitty" />
    </box>
  );
}
