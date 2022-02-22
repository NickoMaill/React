import { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";

export default function Home() {

    const [pokemon, setPokemon] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const [id, setId] = useState(null)

    const userState = useContext(UserContext);


    const randomNumber = () => {
        setId(
            Math.floor(Math.random() * 100) + 1
        );
    };

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(res => {
                setPokemon(res);
                setIsLoaded(true);
                // console.log(res);
            })
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);
            })
    }, [id]);



    if (isLoaded !== true && userState.isLogged === false) {
        return (
            <div>
                <h1>HOME</h1>
                <h4>please connect</h4>

            </div>
        );
    } else if (isLoaded !== true && userState.isLogged === true) {

        return (
            <div>
                <h1>HOME</h1>
                <button onClick={randomNumber}>Random Pokemon</button>

            </div>
        )

    } else {

        return (
            <div>

                <h1>HOME</h1>
                <button onClick={randomNumber}>Random Pokemon</button>
                <h4>Name : {pokemon.name}</h4>
                <h4>Height : {pokemon.height}</h4>
                <h4>Weight : {pokemon.weight}</h4>
                <h3>Type : </h3>
                <ul>
                    {pokemon.types.map((types, i) => (
                        <p key={i}> {types.type.name} </p>
                    ))}
                </ul>
                <img
                    src={pokemon.sprites.front_default}
                    alt={`picture of ${pokemon.name}`}
                    title={pokemon.name} />

            </div>
        );

    }

}