
const a:string = 1 + 2;
const b:boolean = a + 3;



interface C {
  apple:boolean;
  banana: number;
}

const c :C  = {
  apple: a,
  banana: b
};


const d:boolean = c.apple * 4;


