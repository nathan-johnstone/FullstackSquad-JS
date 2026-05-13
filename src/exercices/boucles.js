let notesTibo = [0, 3, 4, 6, 18, 19, 4];

function calculerMoyenne(tab){
    let moyenne = 0
    for (let i = 0; i < tab.length; i++) {
        moyenne = tab[i] + moyenne;
    }
    return moyenne / tab.length;
}

console.log("La moyenne des notes de Tibo est : ", calculerMoyenne(notesTibo))

