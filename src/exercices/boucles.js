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
