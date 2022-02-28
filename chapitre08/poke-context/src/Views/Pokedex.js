//MODULE IMPORT
import { useState, useContext, useEffect } from "react";
import { Context } from "../Context/NewsContext";

//COMPONENTS IMPORT
import MineCard from "../Components/MinCard"
import Card from "../Components/Card"

//FUNCTION IMPORT
import idFormat from "../Modules/IdFormat";

//LIBRARY IMPORT
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

//STYLE IMPORT
import "../App.css"
import "../Styles/Pokedex.css"

// Main Function App
export default function Pokedex() {

    //Import Context
    const stateContext = useContext(Context);

    // Create State
    const [limitFetch, setLimitFetch] = useState(20)
    const [loadClass, setLoadClass] = useState("btn-load-next")
    const [modalIsOpen, setIsOpen] = useState(false);


    // function for load more pokemon pokedex start at "limit=20"
    const loadNextPokemon = () => {
        setLimitFetch(limitFetch + 20)
        setLoadClass("btn-load-next loading")

    }

    //Style for Modal-react
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    Modal.setAppElement("#root");

    let subtitle;
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const displayStats = (e) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                stateContext.setCurrentPokemon(res)
                stateContext.setType(res.types[0].type.name)
                console.log(res.types[0].type.name);
                openModal()
            })
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);
            })
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
                                        onClick={displayStats}
                                    />
                                )
                            }
                        })}

                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >

                            <Card

                            />


                        </Modal>

                    </div>

                    <button className={loadClass} onClick={loadNextPokemon}>more Pokemon</button>

                </div>

            </div>
        )
    }
}

