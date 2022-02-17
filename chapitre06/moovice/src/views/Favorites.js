import React from 'react';
import Card from '../Components/Card'
import "../styles/Favorites.css"

class Favorites extends React.Component {

    constructor() {
        super()
        this.state = {
            movies: [],
            favIDs: this.getStorage(),
            isLoaded: false,

        }

        this.getStorage = this.getStorage.bind(this);
        this.getMovie = this.getMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);

        // console.log("moviesState", this.state.movies);
        console.log("favIDs", this.state.favIDs);
    }

    getStorage() {
        return JSON.parse(localStorage.getItem("favorites")) || [];

    }

    getMovie(id) {
        const url = `http://api.themoviedb.org/3/movie/${id}?api_key=c2be48a5585d57d2bdf589eb92e96d86`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.state.movies.push(data)
                // console.log("data", data);
                this.setState({
                    movies: this.state.movies,
                    isLoaded: true
                })
                // console.log("moviesState2", this.state.movies);
                console.log("film", this.state.movies[1].id);

            })
    }

    deleteMovie(id) {
        const favIdsIndex = this.state.favIDs.indexOf(id)
        this.setState({
            favIDs: this.state.favIDs.splice(favIdsIndex, 1)
        })
    }

    componentDidMount() {

        this.state.favIDs.forEach(movie => {
            this.getMovie(movie)
        });

    }

    render() {
        return (
            <div>
                <h1>Favorites</h1>
                <div className="fav-div">
                    {this.state.movies.map((movie, i) => {
                        if (i === 0 || i <= this.state.movies.length) {
                            // console.log("idTest",this.state.movies[0].id);
                            return (
                                <Card
                                    onClickDelete={() => this.deleteMovie(this.state.movies[0].id)}
                                    delete={require("../assets/images/crossClose.png")}
                                    key={i}
                                    src={movie.poster_path}
                                    titleFilm={movie.original_title}
                                    releaseYear={movie.release_date}
                                    description={movie.overview}
                                    popularity={Math.floor((movie.popularity / 10000) * 100)}
                                />
                            )
                        }

                    })}

                </div>
            </div>
        );
    }
}

export default Favorites;