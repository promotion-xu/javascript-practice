interface P1 {
  name: string;
}

interface P2 {
  age: number;
}

function convert(x: P1): number;
function convert(x: P2): string;
function convert(x: P1 | P2): any {}

const x1 = convert({ name: "" } as P1);
const x2 = convert({ name: "", age: 18 } as P2);
