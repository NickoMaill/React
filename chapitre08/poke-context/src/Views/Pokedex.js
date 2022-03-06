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
import "../Sass/Pokedex.scss";

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

    //MODAL Function
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

    // function to add a pokemon to userTeam

    const catcheEmAll = () => {

        if (stateContext.team.includes(stateContext.currentPokemon.id)) {
            let tempTeam = stateContext.team
            stateContext.setTeam(tempTeam.splice(tempTeam.indexOf(stateContext.currentPokemon.id), 1));
            stateContext.setTeam(tempTeam)
            setTeamClass("no-added")

        } else {

            if (stateContext.pokeballStock === 0) {
                console.warn("plus de pokeball");
                return

            } else {

                if (stateContext.team.length === 6) {
                    console.warn("limit to 6 pokemon");
                    return

                } else {
                    const catchPokemon = Math.random() < 0.3
                    console.log(catchPokemon);

                    if (catchPokemon === false) {
                        console.warn("oups")
                        stateContext.setPokeballStock(stateContext.pokeballStock - 1)
                        return

                    } else {
                        stateContext.setTeam(prevPoke => [...prevPoke, stateContext.currentPokemon.id])
                        setTeamClass("");
                        stateContext.setPokeballStock(stateContext.pokeballStock - 1)

                    }
                }

            }

        }
    }

    useEffect(() => {
        localStorage.setItem('userTeam', JSON.stringify(stateContext.team))
        console.log(stateContext.team);
    }, [stateContext.team])

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
                                    fav="../assets/images/Header-icon/pokeball.webp"
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
                            addTeam={catcheEmAll}
                            teamAdd={!stateContext.team.includes(stateContext.currentPokemon.id) && "no-added"}
                        />

                    </Modal>

                </div>

                <button className={loadClass} onClick={loadNextPokemon}>more Pokemon</button>

            </div>

        </div>
    )
}


