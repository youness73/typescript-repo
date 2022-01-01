// Opérateur de coupe-circuit (&&=)
let a: string | null = "x", b = "travolta";

a &&= b;

console.log(a); // affiche travolta

let obj2 =
{
    nom: "wick",
    naissance: {
        jour: "10",
        mois: "01",
        annee: "2000",
        ville: undefined
    },
    tel: null
};

//let villeNaissance = (obj && obj.naissance && obj.naissance.ville) ? obj.naissance.ville : undefined;
console.log(typeof obj2);
let villeNaissance = obj2?.naissance?.ville;
console.log(villeNaissance);   
// affiche undefined

let X = <const> "Bonjour";
console.log(X);