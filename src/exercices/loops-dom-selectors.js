let lesTxt = document.getElementsByTagName('p');
console.log(lesTxt);

let textesTab = Array.from(lesTxt);
console.log(textesTab);

textesTab.map((a) => a.innerHTML = "J'ai changé")
textesTab.map((b) => b.style.color = 'red')