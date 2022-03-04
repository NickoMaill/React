import { useState, useContext, useEffect } from "react";
import { Context } from "../Context/NewsContext";

import MineCard from "../Components/MinCard"
import Card from "../Components/Card"
import FetchListPokemon from "../Modules/fetchListPokemon";
import fetchStatsPokemon from "../Modules/fetchStatsPokemon";

export default function Team(){

    const stateContext = useContext(Context)

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        stateContext.addToTeam.forEach((id) => {
            FetchListPokemon()
        })
    }, [])

    return(
        <div className="pokedex-container">

                <div className="pokedex-content">

                    <h1>Your Pokemon team</h1>

                    <div className="pokedex-wrapper">


                        {/* {stateContext.pokemon.map((pokemon, i) => {

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
                        })} */}

                        {/* <Modal
                            isOpen={stateContext.modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >

                            <Card
                                addTeam={addPokemonToTeam}
                                teamAdd={teamClass}
                            />


                        </Modal> */}

                    </div>

                </div>

            </div>
    )
}