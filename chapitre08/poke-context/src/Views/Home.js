import { useState, useEffect, useContext } from "react";
import { Context } from "../Context/NewsContext";
import offlineApi from "../data/offlineApi.json";
import NewsCard from "../Components/NewsCard";
import axios from 'axios'
import "../Styles/Home.css"
import"../App.css"
import MineCard from "../Components/MinCard";



export default function Home() {

    const stateContext = useContext(Context);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const newsUrl = {
            method: 'GET',
            url: 'https://video-game-news.p.rapidapi.com/pokemon',
            headers: {
                'x-rapidapi-host': 'video-game-news.p.rapidapi.com',
                'x-rapidapi-key': 'f8e155da39mshb4bb9c73c1e3bd6p15dcb5jsn925cb7e1ab14'
            }
        };

        axios.request(newsUrl)
            .then(function (res) {
                // console.log(res.data);
                stateContext.setGameNews(res.data)
            })
            .then(function (res) {
                stateContext.gameNews = res
                setIsLoaded(true)
                console.log(res);
            })
            .catch(function (err) {
                console.error(err);
            });
        // console.log("game", gameNews)
    }, [])

    // useEffect(() => {
    //     stateContext.setGameNews(offlineApi)
    //     console.log(stateContext.gameNews);
    // }, [stateContext.gameNews])

    if (isLoaded !== true) {

        return (
            <div className="home-container">

                <div className="home-content">


                    <div>
                        <h1>Welcome to te the new PokeBattle Universe</h1>
                    </div>

                    <h3>We are chargin the pokeNews ...</h3>

                    <div className="load-div">

                        <div className="lds-facebook"><div></div><div></div><div></div></div>

                    </div>

                </div>

            </div>
        )

    } else {


        return (

            <div className="home-container">

                <div className="home-content">


                    <div>
                        <h1>Welcome to te the new PokeBattle Universe</h1>
                    </div>

                    <div className="total-news-wrapper">

                        {stateContext.gameNews.map((news, i) => {
                            if (i === 0 || i <= 3) {

                                console.log(news);

                                return (


                                    <NewsCard key={i} idKey={i} />


                                )
                            }
                        })}

                    </div>

                    <div>

                    <h2>Pokemon of the Weeks</h2>
                    {/* <div>
                        <MineCard/>
                    </div> */}

                    </div>


                    <div className="img-container">

                        <div className="header-img-div">
                            <img className="header-img" src={require("../assets/images/pokemon-Header.png")} alt="" />
                        </div>

                    </div>
                </div>

            </div>

        );

    }

}

