import { Variable } from "astal";

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
const day = Variable<string>("").poll(
  1000,
  'date +"%a"',
  (out: string, prev: string) => out,
);
const month = Variable<string>("").poll(
  1000,
  'date +"%b"',
  (out: string, prev: string) => out,
);
const transform = (v) =>
  v.toString().length % 2 == 0 ? v.toString() : "0" + v.toString();
const transform2 = (v) =>
  v.toString().length % 2 == 0
    ? v.toString().toUpperCase()
    : "X" + v.toString().toUpperCase();

export default function Time() {
  return (
    <box vertical className={"DateTime"}>
      {/* <label className={"BruhLabel"} label={month(transform2)} /> */}
      <label className={"DateLabel"} label={dm(transform)} />
      <label className={"TimeLabel"} label={hour(transform)} />
      <label className={"TimeLabel"} label={minute(transform)} />
      <label className={"DateLabel"} label={year(transform)} />
      {/* <label className={"BruhLabel"} label={day(transform2)} /> */}
    </box>
  );
}
