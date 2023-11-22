const i: 3 = 3;
i = 4; // Error TS2588 : Cannot assign to 'i' because it is a constant.ts(2588)

const j = [1, 2, 3];
j.push(4);
j.push('5'); // Error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.

let k: never = 4; // Error TSTS2322: Type '4' is not assignable to type 'never'.

let l: unknown = 4;
let m = l * 2; // Error TS2571: Object is of type 'unknown'.
