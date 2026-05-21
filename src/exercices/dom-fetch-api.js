const apiPoke = document.querySelector('.apiPoke');

const apiPokemon =  async () => {
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
            // console.log(element.name);

            apiPoke.innerHTML += `<li>${pokemon.name}</li>`;

            // const liste = document.createElement('li');
            // liste.innerText = pokemon.name;
            // apiPoke.appendChild(liste);
        });

    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
}

apiPokemon();