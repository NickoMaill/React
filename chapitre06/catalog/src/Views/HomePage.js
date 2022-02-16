import React from 'react';
import { Link } from 'react-router-dom';
import data from "../Data/films.json"



class HomePage extends React.Component {
    
    render() {

        console.log(data);

        return (
            <div>

                <h1>Nutflex</h1>

                <div>

                    <h2>Notre Super catalogue de bonjour</h2>

                    <ul>
                        {data.map((film, i) => {
                            
                                console.log();
                                return (
                                    <li key={i} ><Link to={`/film-info/${film.id}`}>{film.title}</Link></li>
                                )
                            
                        })}
                    </ul>

                </div>

            </div>

        );

    }

}
export default HomePage;

