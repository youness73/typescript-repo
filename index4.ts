function incrementIfEqualToOne(i: number): number | null {
  return i == 1 ? ++i : null;
}
let j: null | number = incrementIfEqualToOne(1);

let k: number = j!;

console.log(k);

var list: number[] = Array.from(Array(3).keys());
console.log(list);
