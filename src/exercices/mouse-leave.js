const info = document.querySelector('#gagnant');
document.addEventListener("mouseleave", () => {
        info.style.display = "block";
        info.style.marginTop = "50px";
        info.style.textAlign = "center";
        info.style.color = "red";
        info.style.background = "lime";
});
document.addEventListener("mouseover", () => {
        info.style.display = "none";
});

// let inputTexte = document.querySelector('input').value;
// let rendu = document.querySelector('#renderKeyboard');
// const texte = document.querySelector('input');

// document.addEventListener("keyup", () => {
//     rendu.innerHTML = inputTexte
// });