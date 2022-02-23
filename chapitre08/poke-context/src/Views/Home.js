import { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import Card from "../Components/Card";

export default function Home() {

    const [pokemon, setPokemon] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const [id, setId] = useState(null)
    const [type, setType] = useState("")

    const userState = useContext(UserContext);


    const randomNumber = () => {
        setId(
            Math.floor(Math.random() * 721) + 1
        );
    };

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(res => {
                setPokemon(res);
                setType(res.types[0].type.name)
                setIsLoaded(true);
                console.log(res);
                console.log(res.types[0].type.name);
            })
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);
            })
    }, [id]);

    if (isLoaded !== true && userState.isLogged === false) {
        return (
            <div>
                <h1>HOME</h1>
                <h4>please connect </h4>

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
                <Card
                    name={pokemon.name}
                    sprites={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name}
                    title={pokemon.name}
                    height={pokemon.height / 10}
                    weight={pokemon.weight / 10}
                    idAudio={pokemon.id}
                    types={pokemon.types}
                    stats={pokemon.stats}
                    id={pokemon.id}
                    className={type}
                />

            </div>
        );

    }

}