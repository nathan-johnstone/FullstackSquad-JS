const email = document.querySelector('#login-mail');
const password = document.querySelector('#login-password');
const retour = document.querySelector('#errorSection');

const regexEmail = /^[A-z0-9._-]+@[A-z0-9._-]+\.[a-z]{2,6}$/;
const regexChiffre = /\d/;
const regexSpecial = /[$&@!]/;

// email.addEventListener('keyup', () => {
//     if(regexEmail.test(email.value)){
//         email.style.background = "chartreuse"
//     }else{
//         email.computedStyleMap.background = "red";
//     };
// });

email.addEventListener('keyup', () => regexEmail.test(email.value) ? email.style.background = "chartreuse" : email.style.background = "red");

password.addEventListener('keyup', () =>{
    if (password.value === '') {
        retour.innerHTML = '';
        retour.style.border = 'none';
        return;                        
    };
    let errorMessages = "";
    if(password.value.length < 6){
        errorMessages = errorMessages + "<li>Votre Mot de passe est trop Court</li>";
    }else if(password.value.length > 8){
        errorMessages = errorMessages + "<li>Votre Mot de passe est trop Long</li>";
    }
    if(!password.value.match(regexChiffre)){
        errorMessages = errorMessages + "<li>Le Mot de passe doit contenir 1 chiffre</li>";
    }
    if(!password.value.match(regexSpecial)){
        errorMessages = errorMessages + "<li>Le Mot de passe doit contenir 1 caractère spécial</li>";
    }
    if(errorMessages != ""){
        retour.innerHTML = "<ul>" + errorMessages + "</ul>";
        retour.style.border = "solid red 5px"
    }else{
        retour.innerHTML =  "Le mot de passe est VALIDE bien joué";
        retour.style.border = "solid green 5px"
    }
});

const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log('envoyé');
});
