import Mpris from "gi://AstalMpris";
const mpris = new Mpris.Mpris();
let players = mpris.get_players();
// print(players[0].get_artist());

export default function Media() {
  return <box />;
}
