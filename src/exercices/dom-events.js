const element = document.querySelector('h1');
const content = document.querySelector('h1').innerText;

element.addEventListener('click', () => {(element.innerText == content) ? element.innerText = "--🥳--" : element.innerText = content});

const btnAjouter = document.querySelector('#ajouter');
const btnSupprimer = document.querySelector('#supprimer');
const btnToggle = document.querySelector('#toggle');
const titre = document.querySelector('h2');

btnAjouter.addEventListener('click', () => titre.classList.add("class"));
btnSupprimer.addEventListener('click', () => titre.classList.remove("class"));
btnToggle.addEventListener('click', () => titre.classList.toggle("class"));

document.addEventListener('click', (eventOnClick) => {
    let xPos = eventOnClick.x;
    let yPos = eventOnClick.y;
    const image = document.createElement('img');
    image.src = "https://picsum.photos/200";
    document.body.appendChild(image);
    image.style.display = "block";
    image.style.position = "absolute";
    // image.style.top = yPos + "px";
    // image.style.left = xPos + "px";
    image.style.top = "calc(" + yPos + "px - 100px)";
    image.style.left = "calc(" + xPos + "px - 100px)";
});
