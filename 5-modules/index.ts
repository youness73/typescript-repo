import { Circle } from "./circle";
import { ACTIONTYPES, getPerson } from "./constants"

const circle = new Circle(12.34);

circle.disp();
console.log(Circle.value);
console.log(circle.sum(1,23));

console.log(getPerson(), ACTIONTYPES);
