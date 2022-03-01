const fetchStatsPokemon = (e) => {

    const fetchUrl = `https://pokeapi.co/api/v2/pokemon/${e.target.value}`

    return (
        fetch(fetchUrl)
            .then(res => res.json())

            .catch((err) => {
                console.error("Error while charging a Pokemon", err);

            })


    );

}

export default fetchStatsPokemon