import React from 'react';
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
import "../styles/PopularBattle.css"

class PopularBattle extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            currentBattle: 0,
            value: null,
            isLoaded: false


        }
        this.incrementBattle = this.incrementBattle.bind(this);


    }


    componentDidMount() {
        const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c2be48a5585d57d2bdf589eb92e96d86"

        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log("data", data);
                this.setState({
                    movies: data.results,
                    isLoaded: true
                })
                // console.log("movies", this.state.movies);
                // console.log("movies2", this.state.movies.length);
                console.log(this.state.isLoaded);
            })


    }

    incrementBattle() {
        this.setState(() => {
            return {
                currentBattle: this.state.currentBattle + 2,
            };
        });
    }



    render() {
        const movies = this.state.movies;
        const currentBattle = this.state.currentBattle;
        // console.log("movieState",movies[1]);
        if (this.state.isLoaded === true && currentBattle <= movies.length) {
            // console.log("movieState", movies[currentBattle].title)
            // console.log(movies.length);
            return (
                <div>
                    <h1>Popular Battle</h1>

                    <Card
                        src={movies[currentBattle].poster_path}
                        titleFilm={movies[currentBattle].original_title}
                        releaseYear={movies[currentBattle].release_date}
                        description={movies[currentBattle].overview}
                        popularity={Math.floor((movies[currentBattle].popularity / 10000) * 100)}
                        onClick={this.incrementBattle}
                    />

                    <h2>VS</h2>

                    <Card
                        src={movies[currentBattle + 1].poster_path}
                        titleFilm={movies[currentBattle + 1].original_title}
                        releaseYear={movies[currentBattle + 1].release_date}
                        description={movies[currentBattle + 1].overview}
                        popularity={Math.floor((movies[currentBattle + 1].popularity / 10000) * 100)}
                        onClick={this.incrementBattle}
                    />


                </div>

            )
        } if (currentBattle === movies.length) {
            return (
                <div>
                    <h1>Popular Battle</h1>
                </div>

            );

        } else {
            return (
                <h1>oups</h1>
            )
        }
    }
}

export default PopularBattle;