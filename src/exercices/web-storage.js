const myTxt = document.querySelector("#note-textarea");
// console.log(myTxt);

const renderZone = document.querySelector(".textRender");
// console.log(renderZone);

//On va pré remplir le textarea avec ce que l'on récupère dans le local storage
myTxt.value = localStorage.getItem('monSuperTexte');
//Si myTxt.value est définit alors on rempli la Div avec ce qu'on récupère dans le local storage
// Cela va nous permettre de ne pas perdre les données si on rafraîchit la page
if(myTxt.value){
    renderZone.innerText = localStorage.getItem('monSuperTexte');
};
//On détecte ce que tape l'utilisateur dans le textarea
myTxt.addEventListener("keyup", function() {
//On enregistre ce que tape l'utilisateur dans le keyup sous le nom "monSuperTexte"
localStorage.setItem('monSuperTexte',myTxt.value);
//On affiche ce que tape l'utilisateur traduit en marked dans la div     
    renderZone.innerText =myTxt.value;
});