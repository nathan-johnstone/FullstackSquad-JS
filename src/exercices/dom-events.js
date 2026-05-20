const element = document.querySelector('h1');
const content = document.querySelector('h1').innerText;

element.addEventListener('click', () => {(element.innerText == content) ? element.innerText = "--🥳--" : element.innerText = content});

const btnAjouter = document.querySelector('#ajouter');
const btnSupprimer = document.querySelector('#supprimer');
const btnToggle = document.querySelector('#toggle');
const titre = document.querySelector('h2')

btnAjouter.addEventListener('click', () => titre.classList.add("class"));
btnSupprimer.addEventListener('click', () => titre.classList.remove("class"));
btnToggle.addEventListener('click', () => titre.classList.toggle("class"));
