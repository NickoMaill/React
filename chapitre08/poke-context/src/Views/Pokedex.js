import { useState, useContext, useEffect } from "react";
import Card from "../Components/Card"
import { Context } from "../Context/NewsContext";
import MineCard from "../Components/MinCard"
import "../App.css"
import "../Styles/Pokedex.css"
import axios from "axios";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"

export default function Pokedex() {

    const stateContext = useContext(Context);

    const [isLoaded, setIsLoaded] = useState(false)
    // const [offsetFetch, setOffsetFetch] = useState(0)
    const [limitFetch, setLimitFetch] = useState(20)
    const [loadClass, setLoadClass] = useState("button")

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limitFetch}`)
            .then(res => res.json())
            .then(res => {
                stateContext.setPokemon(res.results);
                setIsLoaded(true);
            })
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);
            })
    }, []);

    const idFormat = (i) => {
        i += 1
        i = i.toString()

        if (i.length < 2) {
            return "00" + i

        } else if (i.length < 3 && i.length > 1) {
            return "0" + i

        } else {
            return i
        }
    }

    const loadNextPokemon = () => {
        setLimitFetch(limitFetch + 20)
        setLoadClass("button loading")

    }

    useEffect(() => {
        console.log(limitFetch);
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limitFetch}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                stateContext.setPokemon(res.results)
                setLoadClass("button")

            })
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);
            })
    }, [limitFetch])


    if (isLoaded !== true) {

        return (
            <div>
                <h1>Pokedex</h1>
                <div className="load-div">

                    <h3>We are chargin the pokeNews ...</h3>

                    <div className="lds-facebook"><div></div><div></div><div></div></div>

                </div>
            </div>
        )

    } else {

        return (
            <div className="pokedex-container">

                <div className="pokedex-content">

                    <h1>Pokedex</h1>

                    <div className="pokedex-wrapper">

                        {stateContext.pokemon.map((pokemon, i) => {

                            if (i === 0 || i <= stateContext.pokemon.length) {

                                return (
                                    <MineCard
                                        key={i}
                                        keyId={i}
                                        id={idFormat(i)}
                                    />
                                )
                            }
                        })}

                    </div>

                    <button className={loadClass} onClick={loadNextPokemon}>more Pokemon</button>

                </div>

            </div>
        )
    }
}

{/* <Card
name={stateContext.pokemon.name}
sprites={stateContext.pokemon.sprites.other['official-artwork'].front_default}
alt={stateContext.pokemon.name}
title={stateContext.pokemon.name}
height={stateContext.pokemon.height / 10}
weight={stateContext.pokemon.weight / 10}
idAudio={stateContext.pokemon.id}
types={stateContext.pokemon.types}
stats={stateContext.pokemon.stats}
id={stateContext.pokemon.id}
className={stateContext.type}
/>*/}