let lesTxt = document.getElementsByTagName('p');
console.log(lesTxt);

let textesTab = Array.from(lesTxt);
console.log(textesTab);

textesTab.map((temp) => {
    temp.innerHTML = "J'ai changé";
    temp.style.color = 'red';
});
