//MODULE IMPORT
import { useEffect, useContext, useState } from "react";
import { Context } from "../Context/NewsContext";

//COMPONENTS IMPORT
import NewsCard from "../Components/NewsCard";
import MineCard from "../Components/MinCard";

//FUNCTION IMPORT
import IdFormat from "../Modules/IdFormat";
import RandomId from "../Modules/RandomId";
import useLocalStorage from "../Modules/useLocaleStorage";
import FetchPokemon from "../Modules/FetchPokemon";

//LIBRARY IMPORT
import dayjs from "dayjs";

//FILES IMPORT
import offlineApi from "../data/offlineApi.json" //temporary, for save some requests, limited to 2500 per month.....(freeApi)

//STYLE IMPORT
import "../Styles/Home.css"

//Main function home

export default function Home() {

    //Home State

    const stateContext = useContext(Context);
    const [idStore, setIdStore] = useState(JSON.parse(localStorage.getItem("id")) || [])

    //On load Page

    useEffect(() => {

        //  // fetch pokemon news

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

        // replace fetch for save some requests

        stateContext.setGameNews(offlineApi)

        //PokeApi request, loads 721 pokemon, there's more pokemon, but i have just only 721 cry sounds

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

            // function to determinate the pokemon o the week, functional only on monday

        function IdsWeek() {
            const day = dayjs().format("dddd") 

            if (day !== "Monday") {
                const res = RandomId(3, 721)
                stateContext.setWeeklyPokemon(res)
                localStorage.setItem('id', JSON.stringify(res))
                console.log(day);
                
            } else {
                console.log(localStorage.id);
                return stateContext.weeklyPokemon
            }

        }

        IdsWeek()
    }, [])

    //Loading page

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

        //Home Content

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

