function* generateur() {
  for (let i = 0; i < 3; i++) {
    yield i;
  }
}

var f = generateur();

do {
    console.log(f.next());
}while (!f.next().done)

let somme2 = (a:number, b:number, c:number): number => a + b + c;

console.log(somme2(2,3,5));

let sommeCur = (a: number) => (b: number) => (c: number) => a + b + c;

console.log(sommeCur(2) (3) (5) );

const $ = x => k => $(k(x));
//let somme = x => y => x + y;
//let produit = z => t => z * t;

$(1)(console.log)