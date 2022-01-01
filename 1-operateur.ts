// L'opérateur binaire &
let a: number = 15; // 1111 = 8 + 4 + 2 + 1 = 15
let b: number = 10; // 1010 = 8 + 0 + 2 + 0 = 10

let result;

// a & b Renvoie un 1 à chaque position binaire pour laquelle les bits des deux opérandes sont à 1.
// ex : 15 & 10 = 1111 + 1010 = 1010 = 10
// ex : 10 & 6 = 1010 + 0110 = 2
result = (a & b);
console.log("(a & b) => ", result);

// ref : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators
