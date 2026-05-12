function addition(a = 0){
    console.log(a + 33);
};

addition(1);

function additionDeux(a = 0, b = 0){
    console.log(a + b);
};

additionDeux(1, 2)

let additionTrois = x => x + 10;

console.log(additionTrois(2))

function additionQuatre(a = 0, b = 2){
    return a + b;
};

console.log(additionQuatre(10, 20));

function additionnerOptiSécurisée(firstNumber=0, secondNumber=0) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        throw new Error('Les paramètres doivent être des nombres');
    }
    return firstNumber + secondNumber;
}
console.log(additionnerOptiSécurisée("azerty", 3));