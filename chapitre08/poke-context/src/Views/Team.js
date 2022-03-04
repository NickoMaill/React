import { useState, useContext, useEffect } from "react";
import { Context } from "../Context/NewsContext";
import idFormat from "../Utils/idFormat";

import MineCard from "../Components/MinCard"
import Card from "../Components/Card"
import fetchListPokemon from "../Utils/fetchListPokemon";
import { customStyles } from "../Utils/customStyles";
import Modal from "react-modal/lib/components/Modal";
import fetchStatsPokemon from "../Utils/fetchStatsPokemon";
// import fetchStatsPokemon from "../Utils/fetchStatsPokemon";
import "../Styles/Pokedex.css";

export default function Team() {

    const stateContext = useContext(Context)

    const [isLoaded, setIsLoaded] = useState(false)
    const [currentTeam, setCurrentTeam] = useState([])

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

    useEffect(() => {

        fetchListPokemon(721)
            .then(res => {
                stateContext.setPokemon(res.results)
                setIsLoaded(true)


            })
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);
            })
    }, [])

    return (
        <div className="pokedex-container">

            <div className="pokedex-content">

                <h1>Your Pokemon team</h1>

                <div className="pokedex-wrapper">

                    

                        {stateContext.team.length === 0 ? (
                            <h2>Vous n'avez pas encore de favoris</h2>

                        )
                            :

                            isLoaded ? stateContext.team.map((userTeam, i) => {
                                console.log(userTeam);
                                if (i === 0 || i <= stateContext.team.length) {
                                    console.log(stateContext.pokemon[stateContext.team[i]]);
                                    return (
                                        <MineCard
                                            key={i}
                                            keyId={userTeam - 1}
                                            id={idFormat(userTeam)}
                                            onClick={displayStats}
                                        // fav="../assets/images/Header-icon/pokeball.png"
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

                        <Card />

                    </Modal>

                </div>

            </div>

        </div>
    )
}