import { useEffect, useContext } from "react";
import { Context } from "../Context/NewsContext";
import NewsCard from "../Components/NewsCard";
import IdFormat from "../Modules/IdFormat";
import RandomId from "../Modules/RandomId";
import "../Styles/Home.css"
import offlineApi from "../data/offlineApi.json"
import MineCard from "../Components/MinCard";



export default function Home() {

    const stateContext = useContext(Context);

    useEffect(() => {
        // const newsUrl = {
        //     method: 'GET',
        //     url: 'https://video-game-news.p.rapidapi.com/pokemon',
        //     headers: {
        //         'x-rapidapi-host': 'video-game-news.p.rapidapi.com',
        //         'x-rapidapi-key': 'f8e155da39mshb4bb9c73c1e3bd6p15dcb5jsn925cb7e1ab14'
        //     }
        // };

        // axios.request(newsUrl)
        //     .then(function (res) {
        //         // console.log(res.data);
        //         stateContext.setGameNews(res.data)
        //     })
        //     .then(function (res) {
        //         stateContext.gameNews = res
        //         setIsLoaded(true)
        //         console.log(res);
        //     })
        //     .catch(function (err) {
        //         console.error(err);
        //     });
        // console.log("game", gameNews)

        stateContext.setGameNews(offlineApi)

        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=721")

            .then(res => res.json())
            .then(res => {
                console.log(res);
                stateContext.setPokemon(res.results);
                stateContext.setIsLoaded(true)
            })

            .catch((err) => {
                console.error("Error while charging a Pokemon", err);

            })

        function IdsWeek(i) {
            const res = [RandomId(i), RandomId(i), RandomId(i)]
            stateContext.setWeeklyPokemon(res)
        }

        IdsWeek(721)
        IdsWeek(721)
        IdsWeek(721)
    }, [])

    if (stateContext.isLoaded !== true) {

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

                                // console.log(news);

                                return (

                                    <NewsCard key={i} idKey={i} />

                                )
                            }
                        })}

                    </div>

                    <div>

                        <h2>Pokemon of the Weeks</h2>

                        <div className="weekly-pokemon">

                            {stateContext.weeklyPokemon.map((week, i) => {
                                if (i === 0 || i <= stateContext.weeklyPokemon.length) {
                                    console.log(i);
                                    console.log(stateContext.weeklyPokemon);
                                    return (
                                        <MineCard
                                            key={i}
                                            keyId={stateContext.weeklyPokemon[i]}
                                            id={IdFormat(stateContext.weeklyPokemon[i])} />

                                    )
                                }
                            })}
                            
                        </div>


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

