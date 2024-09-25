import { App, Variable, Astal, Gtk, bind } from "astal";

const hour = Variable<number>(0).poll(
  1000,
  "date +'%H'",
  (out: string, prev: number) => parseInt(out),
);
const minute = Variable<number>(0).poll(
  1000,
  "date +'%M'",
  (out: string, prev: number) => parseInt(out),
);
const dm = Variable<number>(0).poll(
  1000,
  "date +'%d%m'",
  (out: string, prev: number) => parseInt(out),
);
const year = Variable<number>(0).poll(
  1000,
  "date +'%Y'",
  (out: string, prev: number) => parseInt(out),
);
const transform = (v) => v.toString();

export default function Time() {
  return (
    <box vertical className={"DateTime"}>
      <label className={"DateLabel"} label={dm(transform)} />
      <label className={"TimeLabel"} label={hour(transform)} />
      <label className={"TimeLabel"} label={minute(transform)} />
      <label className={"DateLabel"} label={year(transform)} />
    </box>
  );
}
