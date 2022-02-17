import React from 'react';
import Card from '../Components/Card';
import "../styles/Popular.css"

class Popular extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: []

        }


    }

    componentDidMount() {
        const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c2be48a5585d57d2bdf589eb92e96d86"

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                this.setState({
                    movies: data.results,
                })

            })

    }

    render() {
        return (
            <div>
                <h1>Popular</h1>
                <div className='card-div'>
                    {this.state.movies.map((movie, i) => {
                        console.log("film", movie);
                        if (i === 0 || i <= this.state.movies.length) {
                            // console.log("i", i);
                            return (
                                <Card
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

export default Popular;