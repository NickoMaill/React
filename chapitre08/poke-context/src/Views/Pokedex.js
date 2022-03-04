//MODULE IMPORT
import { useState, useContext, useEffect } from "react";
import { Context } from "../Context/NewsContext";
import { customStyles } from "../Utils/customStyles";

//COMPONENTS IMPORT
import MineCard from "../Components/MinCard";
import Card from "../Components/Card";

//FUNCTION IMPORT
import idFormat from "../Utils/idFormat";
import fetchListPokemon from "../Utils/fetchListPokemon";
import fetchStatsPokemon from "../Utils/fetchStatsPokemon";

//LIBRARY IMPORT
import Modal from 'react-modal';

//STYLE IMPORT
import "../App.css";
import "../Styles/Pokedex.css";
import { legendaryPokemon } from "../Utils/legendaryPokemon";

// Main Function App
export default function Pokedex() {

    //Import Context
    const stateContext = useContext(Context);

    // Create State
    const [limitFetch, setLimitFetch] = useState(20)
    const [loadClass, setLoadClass] = useState("btn-load-next")
    const [teamClass, setTeamClass] = useState("no-added")
    const [isLoaded, setIsLoaded] = useState(false)



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

        if (stateContext.team.includes(stateContext.currentPokemon.id)) {
            console.warn("already added!");
            // console.log(legendaryPokemon[1]);
            return

        } else if (stateContext.team.length === 6) {
            console.warn("limit to 6 pokemon");
            return

        } else {
            stateContext.setTeam(prevPoke => [...prevPoke, stateContext.currentPokemon.id])
            setTeamClass("")
            console.log(stateContext.team);

        }

    }

    useEffect(() => {
        localStorage.setItem('userTeam', JSON.stringify(stateContext.team))
    }, [stateContext.team])

    console.log(stateContext.team);

    useEffect(() => {

        fetchListPokemon(limitFetch)
            .then(res => {
                stateContext.setPokemon(res.results)
                setLoadClass("btn-load-next")
                setIsLoaded(true)


            })
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);
            })
    }, [limitFetch])

    useEffect(() => {

        if (stateContext.team.includes(stateContext.currentPokemon.id)) {
            setTeamClass("")
            return true
        } else {
            setTeamClass("no-added")
        }

    }, [stateContext.currentPokemon])

    return (
        <div className="pokedex-container">

            <div className="pokedex-content">

                <h1>Pokedex</h1>

                <div className="pokedex-wrapper">

                    {isLoaded ? stateContext.pokemon.map((pokemon, i) => {

                        if (i === 0 || i <= stateContext.pokemon.length) {
                            return (
                                <MineCard
                                    key={i}
                                    keyId={i}
                                    id={idFormat(i + 1)}
                                    onClick={displayStats}
                                    fav="../assets/images/Header-icon/pokeball.png"
                                />

                            )
                        }
                    })

                        :

                        <div className="load-div">
                            <img className="load" src={require("../assets/images/download.png")} alt="" />
                        </div>

                    }


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


