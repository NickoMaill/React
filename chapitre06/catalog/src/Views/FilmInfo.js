import React, { Component } from 'react';
import data from "../Data/films.json"

class FilmInfo extends Component {

    render() {

        const film = data.find((films) => {
            return films.id.toString() === this.props.match.params.id.toString()
        })

        //ici on utilise la méthode .find() pour pouvoir trouver dans le .JSON n'importe quel id, 
        //qu'il soit une string ou un nombre de quelque valeur qu'il soit, 
        //ici les valeur dans le .JSON on été remplacer par des strings unique  

        return (

            <div>
                <img src={film.image}/>
                <p>{film.title}</p>
                <p>{film.director}</p>
                <p>{film.stars.join(", ")}</p>
                <p>{film.description}</p>
            </div>
        );

    }

}

export default FilmInfo;

