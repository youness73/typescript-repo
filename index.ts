import { mois } from './file'
// Basic types
let isDone: boolean = true;
console.log(isDone)

// Tuple
let x: [number, string];
x = [0, "Hello"]
console.log(x)

// enum
enum ActionTypes {
    GET_PRODUCTS = '[GET PRODUCTS] LOADED',
    CREATE_PRODUCT = '[CREATE PRODUCT] CREATE'
}

const action = {
    payload: 1,
    type: ActionTypes.GET_PRODUCTS
}
console.log(action);

function test() : void{
    console.log('Hello world');
}

test();

// Error
function error(message: string): never {
    throw new Error(message);
}
//error('Something went wrong');

let A = 2, B = 3;

console.log((~A));

//function
function addNumbers(... nums: number[]) {
    console.log(nums);
    
}
addNumbers(1,2,3);

// Typage statique 
//var t: [number, string, string] = [100, "wick", 'jhon'];
var t: [number, string, string?];

t = [100, 'wick']

var student: [string, ...number[]] =["wick"];

student = ['wick', 10, 25, 30, 25]

console.log(student);

console.log(mois.FEVRIER);

// symboles

const sym = Symbol(2);

console.log(sym);

let sym2 = Symbol("key");
let sym3 = Symbol("key");

console.log(sym2 === sym3);

if (5 > 2) {
    let x3 = 1;
}
//console.log(x3);