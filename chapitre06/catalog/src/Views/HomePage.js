import React from 'react';
import { Link } from 'react-router-dom';
import data from "../Data/films.json"



class HomePage extends React.Component {
    
    render() {

        return (
            <div>
                <h1>Nutflex</h1>

                <div>
                    <h2>Notre Super catalogue de Film</h2>

                    <ul>
                        {data.map((film, i) => {
                            if (i === 0 || i < data.length) {
                                return (
                                    <li key={i}><Link to={`/filmInfo/${i}`}>{film.title}</Link></li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        )
    }

}
export default HomePage;