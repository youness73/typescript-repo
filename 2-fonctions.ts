// fonction avec des arguments
function somme(a:number, b: number) {
    return a + b;
}
console.log(somme(4, 5));

// fonction avec argument optionnel
function personne(id:number, name: string, mail?: string) // mail: string|undefined
{
    console.log("ID: ", id);
    console.log("Name: ", name);
    
    if(mail!=undefined)
        console.log("Email :", mail);
}
personne(101, "youness");
personne(102, "karim", "karim@gmail.com");

// Rest Parameter
function sum(...nums: number[])
{
    var i;
    var somme:number = 0;
    
    for(i = 0; i < nums.length; i++) {
        somme = somme + nums[i];
    }
    console.log("somme des nombres", somme);   
}
sum(1,2);
sum(1,2,3);

// fonction avec paramètre par défaut
function surface(forme: string = "cercle", ...r: number[]) {
    // formes : Cercle, Caree, Rectangle, Traingle, Ovale, Ellipse, Hexagone, Pentagone, Octagone, Losange, Trapèse
    let i;
    let pi = 3.14;
    let produit = 1;
    if (r.length == 1 && forme == "cercle") {
        console.log("surface du cercle : ", pi * r[0]);
    } else if (r.length == 1 && forme == "caree") {
        console.log("surface du carée : ", r[0] ** 2);
    } else {
        for (i = 0; i < r.length; i++) {
            produit *= r[i];
        }
        console.log("surface du carré : ", produit);
    }
}
surface("cercle", 5);
surface("rectangle", 5, 6);
surface("caree", 5);

// anonymous function
var msg = function() {
    return "hello world";
}
console.log(msg());

// Annonymous function with parameters
var prod = function (a: number, b: number) {
    return a * b;
}
console.log(prod(2, 3));

// Function Constructor
var maFonction = new Function("a", "b", "return a * b");
var con = maFonction(5, 6);
console.log("le résultat du constructeur : ", con);

// fonction récursive (exemple du factoriel)
function factoriel(n: number): number {
    if (n <= 0 ) {
        return 1;
    } else {
        return (n * factoriel(n - 1)); 
    }
}
console.log("Factoriel: ", factoriel(10));

// Fonction fléchée (fonction lambda)
var fonct = (x:number, y: number) => x + y; // équivalent à - var fonct = function(x, y) {return x + y}
console.log("fonction lambda : ", fonct(10, 15));

// Fonction fléchée version 2
var fonct2 = (x: number) => {
    x = x + 5;
    console.log("Fonction lambda v2 : ", x);
};
fonct2(25);

// Fonction fléchée version 3
// "noImplicitAny": false dans tsconfig.json
var func = (x)=> { 
    if(typeof x=="number") { 
       console.log(x+" is a number") 
    } else if(typeof x=="string") { 
       console.log(x+" is a string") 
    }  
 } 
 func(10) 
 func("Youness")

// les parentheses sont optinnel dans le cas d'un seul paramètre
var func2 = x => {
    console.log("Bonjour : " + x);
}
func2("Youness");

// les parenthèses obligatoire pour une fonction sans argument
var func3 = () => {
    console.log("Bonjour tout le monde");
}
func3();

// function Overloads (surcharges de fonction)
// Step 1 - Déclarer plusieurs fonctions avec le même nom mais une signature de fonction différente.
// La signature de fonction comprend les éléments suivants.
    //1- Le type de données du paramètre
        //function disp(string):void;
        //function disp(number):void;
    //2- Le nombre de paramètres
        //function disp(n1:number):void; 
        //function disp(x:number,y:number):void;
    //3- La séquence des paramètres
        //function disp(n1:number,s1:string):void; 
        //function disp(s:string,n:number):void;
// Note − La signature de la fonction n'inclut pas le type de retour de la fonction.

// La déclaration doit être suivie de la définition de la fonction. 
// Les types de paramètres doivent être définis "any" si les types de paramètres diffèrent pendant la surcharge. 
// De plus, pour le cas 2 expliqué ci-dessus, 
// vous pouvez envisager de marquer un ou plusieurs paramètres comme facultatifs lors de la définition de la fonction.

//Exemple :

// Les signatures
function disp(s1:string):void; 
function disp(n1:number, s1:string):void;
function disp(n1:number, s1:String, s2:string):void;

// invoquer la fonction pour la rendre fonctionnelle
/*
function disp(x:any){
    console.log(x);
} */
/*
function disp(x:any, y?:any) {
    console.log(x); 
   console.log(y); 
}
*/
function disp(x:any, y?:any, z?:any):void { 
   console.log(x); 
   console.log(y); 
   console.log(z);
} 
disp("abc") 
disp(1,"xyz");
disp(2, "coucou", "toto");