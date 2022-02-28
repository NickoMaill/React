export default function FetchPokemon(limit) {

    const fetchUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`

    fetch(fetchUrl)
    .then(res => res.json())
    .then(res => {
        console.log(res.results);
        return res.results
    })

    .catch((err) => {
        console.error("Error while charging a Pokemon", err);

    })

}