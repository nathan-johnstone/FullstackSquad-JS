let string = "string";
let nombre = 1;
let nombreVergule = 1.2;
let tableau = ["tab", 1];
let unObjet = {
    type:"string",
    nombre:2,
    autre:"coucou"
};

console.log(string);
console.log(nombre);
console.log(nombreVergule);
console.log(tableau);
console.log(unObjet);

let message = fonConsole();

function fonConsole() {
    console.log("Hello world!");
};

console.log(tableau[0]);
console.log(unObjet.autre);
