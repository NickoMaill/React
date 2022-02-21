import React, { useState, useEffect } from "react";

export default function Home() {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1")
            .then(res => res.json())
            .then(res => {
                setPokemon(res)
                // console.log(res);
            });
        // console.log(pokemon.types[0].slot);
    }, []);

    return (
        <div>

            <h1>HOME</h1>
            <h4>Name : {pokemon.name}</h4>
            <h4>Height : {pokemon.height}</h4>
            <h4>Weight : {pokemon.weight}</h4>
            <h3>Type : </h3>
            <ul>
                {pokemon.types.map((types) => (
                    <p> {types.type.name} </p>
                ))}
            </ul>

        </div>
    )
}