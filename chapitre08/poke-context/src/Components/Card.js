import "../Styles/Card.css"

export default function Card(props) {

    return (

        <div className={`poke-card-${props.className}`}>

            <div className="title-div">

                <h2>{props.name}</h2>
                <p>id n° {props.id}</p>
                <img
                    className="sprites"
                    src={props.sprites}
                    alt={`picture of ${props.alt}`}
                    title={props.title} />

            </div>

            <div>

                <h4>Height : {props.height} m</h4>

                <h4>Weight : {props.weight} Kg</h4>
                <div>

                    <h4>Stats</h4>
                    <ul>
                        {props.stats.map((stats, i) => (
                            <li key={i}>{stats.stat.name} : {stats.base_stat}</li>
                        ))}
                    </ul>

                </div>

                <div>
                    <h4>Types</h4>
                    <ul className="type-ul">
                        {props.types.map((types, i) => (
                            <li><img className="types-img" src={require(`/src/assets/images/${types.type.name}.png`)} key={i} /></li>
                        ))}
                    </ul>
                </div>


                <figure>
                    <audio controls src={require(`../assets/audio/${props.idAudio}.ogg`)}><code>audio</code></audio>

                </figure>
            </div>


        </div>

    )

}