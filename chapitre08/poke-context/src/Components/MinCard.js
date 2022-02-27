import { useContext } from "react";
import { Context } from "../Context/NewsContext";
import "../Styles/MinCard.css"

export default function MineCard(props) {
    const stateContext = useContext(Context); 

    return(
        <div className="min-card-div">

            <h3>{stateContext.pokemon[props.keyId].name}</h3>
            <img 
            className="pokemon-sprite" 
            src={require(`../assets/images/officialSprites/${props.id}.png`)} 
            alt={stateContext.pokemon[props.keyId].name}
            title={stateContext.pokemon[props.keyId].name} 
            />
            <span>id n° : {props.id}</span>
            <button onClick={props.onClick} className="button"><a target="_blank" href={stateContext.pokemon[props.keyId].url}>Show Stats</a></button>

        </div>
    )
}