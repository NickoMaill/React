import React from 'react';
import { Link } from 'react-router-dom';
import data from "../Data/films.json"



class HomePage extends React.Component {

    constructor() {
        super()


        console.log("data", data.length);
        // this.getTitle = this.getTitle.bind(this)
    }

    // getTitle() {
    //     for (let i = 0; i < data.length; i++) {

    //         if (i % 1 === 0) {
    //             console.log(i);
    //             return (
    //                 <li><Link>{data[i].title}</Link></li>
    //             )
    //         } else {

    //         }
    //     }
    // }



    render() {

        return (
            <div>
                <h1>Nutflex</h1>

                <div>
                    <h2>Notre Super catalogue de Film</h2>

                    <ul>
                        <li><Link to={`/filmInfo/${data[0].id}`}>{data[0].title}</Link></li>
                        <li><Link to={`/filmInfo/${data[1].id}`}>{data[1].title}</Link></li>
                        <li><Link to={`/filmInfo/${data[2].id}`}>{data[2].title}</Link></li>
                        <li><Link to={`/filmInfo/${data[3].id}`}>{data[3].title}</Link></li>
                        <li><Link to={`/filmInfo/${data[4].id}`}>{data[4].title}</Link></li>
                        <li><Link to={`/filmInfo/${data[5].id}`}>{data[5].title}</Link></li>
                        <li><Link to={`/filmInfo/${data[6].id}`}>{data[6].title}</Link></li>
                        <li><Link to={`/filmInfo/${data[7].id}`}>{data[7].title}</Link></li>
                    </ul>
                </div>
            </div>
        )
    }

}
export default HomePage;