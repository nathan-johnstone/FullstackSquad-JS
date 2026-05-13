let notesTibo = [0, 3, 4, 6, 18, 19, 4];

function calculerMoyenne(tab){
    let moyenne = 0;
    for (let i = 0; i < tab.length; i++) {
        moyenne += tab[i];
    }
    return moyenne / tab.length;
}

console.log("La moyenne des notes de Tibo est : ", calculerMoyenne(notesTibo));

function calculerMoyenne2(tab){
    let moyenne = 0;
    for (const i of tab) {
        moyenne += i;
    }
    return moyenne / tab.length;
}

console.log(calculerMoyenne2(notesTibo));

let x = 0;
notesTibo.forEach((i) => x += i);

console.log(x / notesTibo.length);

let notesMap = notesTibo.map((i) => i * 2);

console.log(notesMap);

const test = {
    nom : 'hello'
};

console.log(test.nom);

test.nom = 'test2';

console.log(test['nom']);

test.new = 'nouveau';

console.log(test);

console.log(Object.keys(test));

console.log(Object.values(test));

console.log(Object.entries(test));

// IF ELSE

function calculerMoyenne2(tab){
    let moyenne = 0;
    for (let i = 0; i < tab.length; i++) {
        moyenne += tab[i];
    }
    moyenne = moyenne / tab.length;
    if (moyenne >= 15){
        return 'très bien';
    } else if (moyenne >= 10){
        return 'assez bien';
    } else {
        return 'refus';
    };
};

let notes = [20, 10];

console.log(calculerMoyenne2(notes));