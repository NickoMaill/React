import { useContext } from "react";
import { Context } from "../Context/NewsContext";
import "../Styles/Card.css"
import idFormat from "../Modules/idFormat";

export default function Card() {
    const stateContext = useContext(Context);

    return (

        <div className={`poke-card-${stateContext.type}`}>

            <div className="title-div">

                <h2>{stateContext.currentPokemon.name}</h2>
                <p>id n° {idFormat(stateContext.currentPokemon.id)}</p>
                <img
                    className="sprites"
                    src={require(`../assets/images/officialSprites/${idFormat(stateContext.currentPokemon.id)}.png`)}
                    alt={`picture of ${stateContext.currentPokemon.name}`}
                    title={stateContext.currentPokemon.name} />

            </div>

            <div>

                <h4>Height : {stateContext.currentPokemon.height} m</h4>

                <h4>Weight : {stateContext.currentPokemon.weight} Kg</h4>
                <div>

                    <h4>Stats</h4>
                    <ul>
                        {stateContext.currentPokemon.stats.map((stats, i) => (
                            <li key={i}>{stats.stat.name} : {stats.base_stat}</li>
                        ))}
                    </ul>

                </div>

                <div>
                    <h4>Types</h4>
                    <ul className="type-ul">
                        {stateContext.currentPokemon.types.map((types, i) => (
                            <li key={i}><img className="types-img" src={require(`/src/assets/images/Types/${types.type.name}.png`)}/></li>
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