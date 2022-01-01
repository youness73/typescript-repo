import { Shape } from "./shape";
import { Calculator } from "./calculator";


export class Circle extends Shape implements Calculator {
    static value: number = 20;
    
    sum(a: number, b: number): number {
        return a + b;
    }
    difference(a: number, b: number): number {
        return a - b;
    }
    disp(): void {
        console.log("Area of the circle: " + this.area);
        console.log(this.result)
    }
}
