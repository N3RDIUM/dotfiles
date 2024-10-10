import { App, Variable, Astal, Gtk, bind } from "astal";

const day = Variable<string>("").poll(
  1000,
  'date +"%A"',
  (out: string, prev: string) => out,
);
const transform = (v) => v.toString();

export default function Day() {
  return (
    <box vertical className={"DateTime"}>
      <label className={"DayLabel"} label={day(transform)} angle={90} />
    </box>
  );
}
