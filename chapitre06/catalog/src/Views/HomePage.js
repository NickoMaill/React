import React from 'react';
import { Link } from 'react-router-dom';
import data from "../Data/films.json"



class HomePage extends React.Component {

    constructor() {
        super()


        console.log("data", data);
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
                        <li><Link to="/filmInfo/0">{data[0].title}</Link></li>
                        <li><Link to="/filmInfo/1">{data[1].title}</Link></li>
                        <li><Link to="/filmInfo/2">{data[2].title}</Link></li>
                        <li><Link to="/filmInfo/3">{data[3].title}</Link></li>
                        <li><Link to="/filmInfo/4">{data[4].title}</Link></li>
                        <li><Link to="/filmInfo/5">{data[5].title}</Link></li>
                        <li><Link to="/filmInfo/6">{data[6].title}</Link></li>
                        <li><Link to="/filmInfo/7">{data[7].title}</Link></li>
                    </ul>
                </div>
            </div>
        )
    }

}
export default HomePage;