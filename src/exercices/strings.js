let civilite = "Mr"
let nom = "Durand";
let prenom = "Jean";
let adresse = "5 avenue du stade";
let codePostal = 11340;
let ville = "Espezel";
let idCommande = 123;
let dateCommande = new Date("2025-01-01");
let statutCommande = "en cours de preparation";
let tempsRestant = 30
let nomProduit = "Calzone";
let prixProduit = 12.50;

let nomBoutique = `"La Pizzeria Raffinata"`;
let blague = `Qu'est-ce qu'une pizza a dit à une autre pizza qui lui demandait des conseils ?\n"Suis ta pâte et tout ira bien !"`;

let SumUpOrderPhrase = "Le " + 	dateCommande.toLocaleDateString("fr") + " :\nBonjour " + civilite + " " + nom + ", votre pizza : " + nomProduit + " est " + statutCommande + ".\nElle vous sera livrée d'ici " + tempsRestant + " minutes au " + adresse + ".\nMerci d'avoir commandé chez " + nomBoutique + ".\n---\n" + blague;

console.log(SumUpOrderPhrase);
