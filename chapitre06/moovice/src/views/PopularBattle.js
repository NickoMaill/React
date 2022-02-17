import React from 'react';
import Card from '../Components/Card'
import "../styles/PopularBattle.css"

class PopularBattle extends React.Component {

    constructor() {
        super();

        this.state = {
            movies: [],
            currentBattle: 0,
            value: null,
            isLoaded: false,
            favorites: localStorage.getItem("favorites", null)


        }

        this.incrementBattle1 = this.incrementBattle1.bind(this);
        this.incrementBattle2 = this.incrementBattle2.bind(this);

    }

    componentDidMount() {
        const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c2be48a5585d57d2bdf589eb92e96d86"

        fetch(url)
            .then(res => res.json())
            .then(data => {

                this.setState({
                    movies: data.results,
                    isLoaded: true
                })

            })


    }

    incrementBattle1() {

        this.setState((prevState) => {

            return {
                currentBattle: prevState.currentBattle + 2,
            };

        });

        localStorage.setItem("favorite", this.state.movies[this.state.currentBattle].id)
        console.log("localStorage", localStorage);


    }

    incrementBattle2() {

        this.setState((prevState) => {

            return {
                currentBattle: prevState.currentBattle + 2,
            };

        });

        localStorage.setItem("favorite", this.state.movies[this.state.currentBattle + 1].id)
        console.log("localStorage2", localStorage);


    }

    render() {

        const movies = this.state.movies;
        const currentBattle = this.state.currentBattle;
        console.log(movies);

        if (this.state.isLoaded === true && currentBattle < movies.length) {


            return (

                <div>

                    <h1>Popular Battle</h1>

                    <p>click on films for votes</p>

                    <div className="vs-div">

                        <Card
                            src={movies[currentBattle].poster_path}
                            titleFilm={movies[currentBattle].original_title}
                            releaseYear={movies[currentBattle].release_date}
                            description={movies[currentBattle].overview}
                            popularity={Math.floor((movies[currentBattle].popularity / 10000) * 100)}
                            onClick={this.incrementBattle1}
                        />

                        <div>
                            <img src={require("../assets/images/latest.png")} alt="vs icon" />
                        </div>


                        <Card
                            src={movies[currentBattle + 1].poster_path}
                            titleFilm={movies[currentBattle + 1].original_title}
                            releaseYear={movies[currentBattle + 1].release_date}
                            description={movies[currentBattle + 1].overview}
                            popularity={Math.floor((movies[currentBattle + 1].popularity / 10000) * 100)}
                            onClick={this.incrementBattle2}
                        />

                    </div>


                </div>

            )

        } else {

            return (

                <div>
                    <h1>Popular Battle</h1>
                    <h2>Vous avez parcouru tous les films !</h2>

                </div>

            );

        }

    }

}

export default PopularBattle;