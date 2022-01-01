// Generics
//* Ref : https://www.typescriptlang.org/docs/handbook/2/generics.html
/*
function identity(arg: number): number {
  return arg;
}
function identity(arg: string): string {
  return arg;
}
function identity(arg: boolean): boolean {
  return arg;
}
==>
function identity<Type>(arg: Type): Type {
  return arg;
}
*/

function identity<T>(arg: T): T {
  return arg;
}
0;
console.log(identity<string>("Hello world"));
console.log(identity<boolean>(true));
console.log(
  identity<{ id: number; name: string }>({
    id: 1,
    name: "Tom",
  })
);

interface ProductType {
  id: number;
  title: string;
}

console.log(
  identity<ProductType>({
    id: 1,
    title: "LEARN TypeScipt",
  })
);

// Generic Interface
interface GenericIdentity<T> {
  greet(msg: T): T;
}

const objj: GenericIdentity<string> = {
  greet: (msg: string) => msg,
};
console.log(objj.greet('salut'));

// Generic Class
class Animal<T> {
    breed: T
    getBreed: () => T
}

const newAnimal = new Animal<string>();
newAnimal.breed = "CAT";
const results = newAnimal.getBreed = () => newAnimal.breed;

console.log(results());

// Generic Constraint
interface lengthwise {
    length: number;
}

function loggingIdentity<T extends lengthwise>(arg: T): T {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}

const lengthwise: lengthwise = {
    length: 100
}
const resp = loggingIdentity<lengthwise>(lengthwise);
console.log(resp);
