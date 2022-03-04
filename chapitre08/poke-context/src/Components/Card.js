import { useContext } from "react";
import { Context } from "../Context/NewsContext";
import idFormat from "../Modules/idFormat";


import "../Styles/Card.css"

export default function Card(props) {
    const stateContext = useContext(Context);

    return (

        <div className={`poke-card-${stateContext.type}`}>


            <div className="title-div">

                <h2>{stateContext.currentPokemon.name}</h2>
                <p>id n° {idFormat(stateContext.currentPokemon.id)}</p>

                <div className="sprites-div" >

                    <img
                        className="default-sprites"
                        src={stateContext.currentPokemon.sprites.front_default}
                        alt={`game picture front of ${stateContext.currentPokemon.name}`}
                    />
                    <img
                        className="sprites"
                        src={require(`../assets/images/officialSprites/${idFormat(stateContext.currentPokemon.id)}.png`)}
                        alt={`picture of ${stateContext.currentPokemon.name}`}
                        title={stateContext.currentPokemon.name}
                    />
                    <img
                        className="default-sprites"
                        src={stateContext.currentPokemon.sprites.back_default}
                        alt={`game picture back of ${stateContext.currentPokemon.name}`}
                    />

                </div>

                <button
                    onClick={props.addTeam}
                    value="hohoho"
                    className="team-button"
                >
                    <img className={`team-icon ${props.teamAdd}`} src={require("../assets/images/Header-icon/pokeball.png")} alt="team icon" />
                </button>


            </div>

            <div className="card-content">

                <h4 className="title-stats">Height : {stateContext.currentPokemon.height / 10} m</h4>

                <h4 className="title-stats">Weight : {stateContext.currentPokemon.weight / 10} kg</h4>

                <div className="stats-container">

                    <div>

                        <h4 className="title-stats">Stats</h4>

                        <div className="stats-list-div">
                            <ul className="stats-list">
                                {stateContext.currentPokemon.stats.map((stats, i) => (
                                    <li key={i}>{stats.stat.name} : {stats.base_stat}</li>
                                ))}
                                <li>Base experience : {stateContext.currentPokemon["base_experience"]} xp</li>
                            </ul>
                        </div>

                    </div>

                    <div>

                        <h4 className="title-stats">Abilities</h4>

                        <div className="stats-list-div">
                            <ul className="stats-list">
                                {stateContext.currentPokemon.abilities.map((abilities, i) => (
                                    <li key={i}>{abilities.ability.name}</li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="area-container">
                    <h4 className="title-stats">Location Area</h4>

                    <div className="area-list-div">
                        <ul className="area-list">
                            {stateContext.locationArea.map((area, i) => {
                                ;
                                return (
                                    <li key={i}>{area.location_area.name} : {area.version_details[0].max_chance} %</li>
                                )

                            }
                            )}
                        </ul>
                    </div>

                </div>


                <div>
                    <h4 className="title-stats">Types</h4>
                    <ul className="type-ul">
                        {stateContext.currentPokemon.types.map((types, i) => (
                            <li key={i}><img className="types-img" src={require(`/src/assets/images/Types/${types.type.name}.png`)} /></li>
                        ))}
                    </ul>
                </div>


                <figure>
                    <audio controls src={require(`../assets/audio/${stateContext.currentPokemon.id}.ogg`)}><code>audio</code></audio>

                </figure>
            </div>


        </div>

    )

}