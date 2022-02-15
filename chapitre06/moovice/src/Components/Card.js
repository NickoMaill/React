import React from 'react';
import "../styles/Card.css"

class Card extends React.Component {
    render() {
        return (
            <div className='card' onClick={this.props.onClick}>
                <img src={`https://image.tmdb.org/t/p/w300/${this.props.src}`} />
                <h2>{this.props.titleFilm}</h2>
                <ul>
                    <li className='li-film-info'><strong>Release year</strong> : {this.props.releaseYear}</li>
                    <li className='li-film-info'><strong>Overview</strong> : {this.props.description}</li>
                    <li className='li-film-info'><strong>Popularity</strong> : {this.props.popularity} %</li>
                </ul>

            </div>
        );
    }
}

export default Card;