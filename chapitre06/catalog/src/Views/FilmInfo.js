import React, { Component } from 'react';
import data from "../Data/films.json"

class FilmInfo extends Component {

    render() {
        return (
            <div>
                <img src={data[this.props.match.params.id - 1].image}/>
                <p>{data[this.props.match.params.id - 1].title}</p>
                <p>{data[this.props.match.params.id - 1].director}</p>
                <p>{data[this.props.match.params.id - 1].stars}</p>
                <p>{data[this.props.match.params.id - 1].description}</p>
            </div>
        );
    }
}

export default FilmInfo;