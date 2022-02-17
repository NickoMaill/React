import React from 'react';
import Card from "../Components/Card";
import dayjs from "dayjs"

class Weekly extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: []

        }


    }

    componentDidMount() {
        const lastWeek = dayjs().subtract(7, 'days').format('YYYY-MM-DD');
        const today = dayjs().format('YYYY-MM-DD');
        const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=c2be48a5585d57d2bdf589eb92e96d86`

        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log("data", data);
                this.setState({
                    movies: data.results,
                })
                // console.log("movies", this.state.movies);
                // console.log("movies2", this.state.movies.length);
            })



    }

    render() {
        return (
            <div>
                <h1>Weekly</h1>
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
                                    popularity={Math.floor((movie.popularity / 1000) * 100)}
                                />
                            )
                        }

                    })}
                </div>
            </div>
        );
    }

}

export default Weekly;