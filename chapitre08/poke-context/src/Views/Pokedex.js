import { useState, useContext, useEffect } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
// import Card from "../Components/Card"
import { Context } from "../Context/NewsContext";
import MineCard from "../Components/MinCard"
import idFormat from "../Modules/IdFormat";
import "../App.css"
import "../Styles/Pokedex.css"

export default function Pokedex() {

    const stateContext = useContext(Context);

    const [limitFetch, setLimitFetch] = useState(20)
    const [loadClass, setLoadClass] = useState("btn-load-next")

    const loadNextPokemon = () => {
        setLimitFetch(limitFetch + 20)
        setLoadClass("btn-load-next loading")

    }

    useEffect(() => {
        console.log(limitFetch);

        fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limitFetch}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                stateContext.setPokemon(res.results)
                setLoadClass("btn-load-next")
                stateContext.setIsLoaded(false)
                stateContext.setIsPokeLoaded(true)
                console.log(stateContext.isLoaded);

            })
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);
            })
    }, [limitFetch])


    if (stateContext.isPokeLoaded !== true) {

        return (
            <div>
                <h1>Pokedex</h1>
                <div className="load-div">

                    <h3>We are chargin the Pokedex ...</h3>

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
                                        id={idFormat(i + 1)}
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

