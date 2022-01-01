// Partie 1
// Déclaration de l'Interface 1
interface Personne {
    prenom: string;
    nom: string;
    email: string;
    age?: number;
    parler(): string;
    commander(nomCommande: string): string;
}


// objet 1 de l'interface 1
const client: Personne = {
    prenom: 'Karim',
    nom: 'Alami',
    email: 'k.alami@gmail.com',
    age: 26,
    parler: function (): string {return 'Bonjour, je suis un client';},
    commander: (nomCommande: string) => {return nomCommande}
}
console.log(client);
console.log(client.parler());
console.log(client.commander("je veux acheter un ordinateur"));


// Objet 2 de l'interface 1
var employe: Personne = {
    prenom: "",
    nom: "",
    email: "",
    age: 0,
    parler: function (): string {return "Bonjour, je suis un employé";},
    commander: function (nomCommande: string): string {
        return nomCommande;
        throw new Error("Function not implemented.");
    }
}
console.log(employe);
console.log(employe.parler());
console.log(employe.commander("je commande un ordinateur"));

// Partie 2
// Union Type and interface
// L'exemple suivant montre l'utilisation de Union de Type et d'Interface
interface RunOptions {
    program: string;
    commandLine: string[] | string | (() => string);
}

// commandLine as string
var options: RunOptions = {program: "test1", commandLine:"Hello"};
console.log(options);

// commandLine as string array
options = {program: "test1", commandLine: ["Hello", "World"]};
console.log(options.commandLine[0]);
console.log(options.commandLine[1]);

//commandLine as a function expression
options = {program: "test1", commandLine: ()=> {return "** Hello World **";} };
var fn: any = options.commandLine;
console.log(fn());

// Partie 3
interface Musicien extends Personne {
    instrument: string;
}

const ali: Musicien = {
    prenom: "Ali",
    nom: "Razi",
    email: "ali@gmail.com",
    instrument: "123456",
    age: 20,
    parler: function (): string {
        return "bonjour";
        throw new Error("Function not implemented.");
    },
    commander: function (nomCommande: string): string {
        return "commander";
        throw new Error("Function not implemented.");
    }
}
console.log(ali);
