const element = document.querySelector('h1');
const content = document.querySelector('h1').innerText;

element.addEventListener('click', () => {(element.innerText == content) ? element.innerText = "--🥳--" : element.innerText = content});
