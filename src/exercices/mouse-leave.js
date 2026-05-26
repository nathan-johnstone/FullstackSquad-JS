// const info = document.querySelector('#gagnant');
// document.addEventListener("mouseleave", () => {
//         info.style.display = "block";
//         info.style.marginTop = "50px";
//         info.style.textAlign = "center";
//         info.style.color = "red";
//         info.style.background = "lime";
// });
// document.addEventListener("mouseover", () => {
//         info.style.display = "none";
// });

let inputTexte = document.querySelector('input');
let rendu = document.querySelector('#renderKeyboard');
const texte = document.querySelector('input');

document.addEventListener("keyup", () => {
    rendu.innerHTML = inputTexte.value;
});

const submit = document.querySelector('button');
const textInput = document.querySelector('textarea');

document.addEventListener("keyup", () => {
    if (textInput.value.length >= 5){
        submit.disabled = true;
        submit.style.background = "darkgray";
    } else {
        submit.disabled = false;
        submit.style.background = "none";
        submit.style.cursor = "not-allowed";
    }
});