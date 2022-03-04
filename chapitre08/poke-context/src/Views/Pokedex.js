//MODULE IMPORT
import { useState, useContext, useEffect } from "react";
import { Context } from "../Context/NewsContext";
import { customStyles } from "../Modules/customStyles";

//COMPONENTS IMPORT
import MineCard from "../Components/MinCard";
import Card from "../Components/Card";

//FUNCTION IMPORT
import idFormat from "../Modules/idFormat";
import fetchListPokemon from "../Modules/fetchListPokemon";
import fetchStatsPokemon from "../Modules/fetchStatsPokemon";

//LIBRARY IMPORT
import Modal from 'react-modal';

//STYLE IMPORT
import "../App.css";
import "../Styles/Pokedex.css";

// Main Function App
export default function Pokedex() {

    //Import Context
    const stateContext = useContext(Context);

    // Create State
    const [limitFetch, setLimitFetch] = useState(20)
    const [loadClass, setLoadClass] = useState("btn-load-next")
    const [teamClass, setTeamClass] = useState("no-added")



    // function for load more pokemon pokedex start at "limit=20"
    const loadNextPokemon = () => {
        setLimitFetch(limitFetch + 20)
        setLoadClass("btn-load-next loading")

    }

    Modal.setAppElement("#root");

    function openModal() {
        stateContext.setIsOpen(true);
    }

    function closeModal() {
        stateContext.setIsOpen(false);
    }

    const displayStats = (e) => {
        fetchStatsPokemon(e.target.value)
            .then(res => {

                fetchStatsPokemon(res.location_area_encounters)
                    .then(res => {
                        console.log(res);
                        stateContext.setArea(res)
                    })

                stateContext.setCurrentPokemon(res)
                stateContext.setType(res.types[0].type.name)
                openModal()

            })
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);
            })
    }

    const addPokemonToTeam = () => {

        if (stateContext.addToTeam.includes(stateContext.currentPokemon.id)) {
            console.warn("already added!");
            return true
        } else if (stateContext.addToTeam.length === 6) {
            console.warn("limit to 6 pokemon");
            return true
        } else {
            stateContext.setAddToTeam(prevPoke => [...prevPoke, stateContext.currentPokemon.id])
            setTeamClass("")

            console.log(stateContext.addToTeam);

        }

    }

    useEffect(() => {

        fetchListPokemon(limitFetch)
            .then(res => {
                stateContext.setPokemon(res.results)
                setLoadClass("btn-load-next")
                stateContext.setIsLoaded(false)
                stateContext.setIsPokeLoaded(true)


            })
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);
            })
    }, [limitFetch])

    useEffect(() => {
        if (stateContext.addToTeam.includes(stateContext.currentPokemon.id)) {
            setTeamClass("")
            return true
        } else{
            setTeamClass("no-added")
        }

    }, [stateContext.currentPokemon])


    if (stateContext.isPokeLoaded !== true) {

        return (
            <div>
                <h1>Pokedex</h1>
                <div className="load-div">

                    <h3>We are chargin the Pokedex ...</h3>

                    <img className="load" src={require("../assets/images/download.png")} alt="" />

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
                                        onClick={displayStats}
                                    />
                                )
                            }
                        })}

                        <Modal
                            isOpen={stateContext.modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >

                            <Card
                                addTeam={addPokemonToTeam}
                                teamAdd={teamClass}
                            />


                        </Modal>

                    </div>

                    <button className={loadClass} onClick={loadNextPokemon}>more Pokemon</button>

                </div>

            </div>
        )
    }
}

