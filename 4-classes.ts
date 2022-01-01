class Car {
    //field
    engine: string;

    //constructor
    constructor(engine:string) {
        this.engine = engine;
    }

    //methods
    disp(): void {
        console.log("The engine of the car is : " + this.engine);
        
    }
}

const bmw = new Car('BMW ENGINE 2.39 #');
console.log(bmw);
bmw.disp();

const city = new Car('HONDA CITY 2.3');
console.log(city.engine)
city.disp();

//héritage (Inheritance)
// Inheritance can be classified as −
    // Single − Every class can at the most extend from one parent class
    // Multiple − A class can inherit from multiple classes. TypeScript doesn’t support multiple inheritance.
    // Multi-level − 

// Interface
interface Calculator {
    sum(a: number, b: number): number;
    difference(a:number, b:number):number;
}

// Classe mère
class Shape {
    static value: number = 20;
    protected result: number = 0;
    area: number;

    constructor(a: number){
        this.area = a;
    }
}

// héritage multiple
class Circle extends Shape implements Calculator {
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

const circle = new Circle(12.34);
circle.disp();
console.log(Circle.value);
console.log("Somme de 10 + 2 = " + circle.sum(10, 2));

// héritage multi-niveau
class Root {
    str: string;
}

class Child extends Root { }
class Leaf extends Child { } // Indirectement hérite de la classe Root 

var obj = new Leaf();
obj.str = "hello";
console.log(obj.str);

// Héritage et redéfinition (Overriding)
class PrinterClass {
    doPrint(): void {
        console.log("doPrint() from Parent called...");
    }
}

class StringPrinter extends PrinterClass {
    doPrint(): void {
        super.doPrint();
        console.log("doPrint() is Printing from a Child Class...");
    }
}

var obj1 = new StringPrinter();
obj1.doPrint();