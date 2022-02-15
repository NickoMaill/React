import React, { Component } from 'react';
import data from "../Data/films.json"

class FilmInfo extends Component {

    render() {
        return (
            <div>
                <img src={data[this.props.match.params.id].image}/>
                <p>{data[this.props.match.params.id].title}</p>
                <p>{data[this.props.match.params.id].director}</p>
                <p>{data[this.props.match.params.id].stars}</p>
                <p>{data[this.props.match.params.id].description}</p>
            </div>
        );
    }
}

export default FilmInfo;