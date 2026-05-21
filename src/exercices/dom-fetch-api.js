const apiPoke = document.querySelector('.apiPoke');

const apiPokemon = async () => {
    try {
        const rawData = await fetch('https://pokeapi.co/api/v2/pokemon');
        // console.log(rawData);

        if (!rawData.ok || rawData.status !== 200) {
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return;
        }

        const data = await rawData.json();
        // console.log(data);
        // console.log(data.results);

        data.results.forEach(pokemon => {
            // console.log(pokemon.name);

            apiPoke.innerHTML += `<li>${pokemon.name}</li>`;

            // const liste = document.createElement('li');
            // liste.innerText = pokemon.name;
            // apiPoke.append(liste);
        });

    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
}

apiPokemon();

const apiChuck = document.querySelector('#chuck');

const apiNorris = async () => {
    try {
        const rawData = await fetch('https://api.chucknorris.io/jokes/random');
        console.log(rawData);
        if (!rawData.ok || rawData.status !== 200) {
            console.error(rawData.statusText);
            return;
        }
        const data = await rawData.json();
        console.log(data);
        console.log(data.value);

        apiChuck.innerText = data.value;

    } catch (error) {
        console.error(error);
    }
}

document.querySelector('button').addEventListener('click', apiNorris);



// let getData = '';

// async function apiNorris(){
//     try {
//         const rawData = await fetch('https://api.chucknorris.io/jokes/random');
//         if (!rawData.ok || rawData.status !== 200) {
//             console.error(rawData.statusText);
//             return;
//         }
//         const data = await rawData.json();
//         getData = data;

//     } catch (error) {
//         console.error(error);
//     }
// };

// //? await fonctionne car type="module" dans le HTML
// await apiNorris();
// console.log(getData);



// function fetchQuotesThenCatch() {
//     let mainTitle = document.querySelector('#chuckNorrisFact');
    
//     // 1. On lance la requête vers l'API
//     fetch('https://api.chucknorris.io/jokes/random')
//         // 2. On convertit la réponse brute en objet JavaScript
//         .then(response => response.json())
//         // 3. On utilise les données reçues pour mettre à jour le HTML
//         .then(dataTransformed => {
//             console.log(dataTransformed);
//             mainTitle.innerText = dataTransformed.value; // Affiche la blague
//         })
//         // 4. On gère les erreurs (ex: coupure internet)
//         .catch(error => {
//             console.error("Erreur lors de l'appel API :", error);
//         });
// }
