import React from 'react';
import Card from '../Components/Card'
import dayjs from 'dayjs'

class WeeklyBattle extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            currentBattle: 0,
            value: null,
            isLoaded: false,
            favorites: JSON.parse(localStorage.getItem("favorites")) || []


        }

        this.incrementBattle = this.incrementBattle.bind(this);
    }

    componentDidMount() {
        const lastWeek = dayjs().subtract(7, 'days').format('YYYY-MM-DD');
        const today = dayjs().format('YYYY-MM-DD');
        const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=c2be48a5585d57d2bdf589eb92e96d86`

        fetch(url)
            .then(res => res.json())
            .then(data => {

                this.setState({
                    movies: data.results,
                    isLoaded: true
                })

            })


    }

    incrementBattle(id) {

        this.setState({
            currentBattle: this.state.currentBattle + 2,
            favorites: [...this.state.favorites, id]
        },

            localStorage.setItem("favorites", JSON.stringify([...this.state.favorites, id])),
            // localStorage.clear(),
            console.log("localeStorage", localStorage),

        );



        console.log("id", this.state.movies[this.state.currentBattle].id);
        // console.log("favorites", this.state.favorites);


    }


    render() {

        const movies = this.state.movies;
        const currentBattle = this.state.currentBattle;
        console.log(movies);

        if (this.state.isLoaded === true && currentBattle < movies.length) {


            return (

                <div>

                    <h1>Weekly Battle</h1>

                    <p>click on films for votes</p>

                    <div className="vs-div">

                        <Card
                            src={movies[currentBattle].poster_path}
                            titleFilm={movies[currentBattle].original_title}
                            releaseYear={movies[currentBattle].release_date}
                            description={movies[currentBattle].overview}
                            popularity={Math.floor((movies[currentBattle].popularity / 10000) * 100)}
                            onClick={() => this.incrementBattle(movies[currentBattle].id)}
                        // onClick={this.incrementBattle}
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
                            onClick={() => this.incrementBattle(movies[currentBattle + 1].id)}
                        // onClick={this.incrementBattle}
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

export default WeeklyBattle;