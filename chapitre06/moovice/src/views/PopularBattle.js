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
            value: null

        }
        this.handleChange = this.handleChange.bind(this);

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
                console.log("movies", this.state.movies);
                console.log("movies2", this.state.movies.length);
            })

    }

	handleChange() {
		this.setState((prevState) => {
			return {
				currentBattle: prevState.currentBattle + 1,
			};
		});
	}
    

    render() {
        return (
            <div>
                <h1>Popular</h1>
                <div className='card-div'>
                    {this.state.movies.map((movie, i) => {
                        if (i === this.state.currentBattle || i <= this.state.currentBattle + 1) {
                            console.log("i", movie);
                            return (

                                    <Card
                                        key={i}
                                        src={movie.poster_path}
                                        titleFilm={movie.original_title}
                                        releaseYear={movie.release_date}
                                        description={movie.overview}
                                        popularity={Math.floor((movie.popularity / 10000) * 100)}
                                        onClick={this.handleChange}
                                    />

                            )
                        }

                    })}
                </div>
            </div>
        );
    }
}

export default PopularBattle;