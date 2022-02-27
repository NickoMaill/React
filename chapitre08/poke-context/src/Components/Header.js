import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../Styles/Header.css"

export default function Header() {
    return (
        <header>

            <div className="nav-div">

                <img className="logo" src={require('../assets/images/Header-icon/pokemon-logo.png')} />

                <nav>

                    <Link className="link-div" to="/">
                        <i><img className="navbar-icon pikachu" src={require("../assets/images/Header-icon/pikachu-icon.png")} /></i>
                        <p className="link">Home</p>
                    </Link>



                    <Link className="link-div" to="/pokedex">
                        <i><img className="navbar-icon pokedex" src={require("../assets/images/Header-icon/pokedex-icon.png")} /></i>
                        <p className="link">Pokedex</p>
                    </Link>



                    <Link className="link-div" to="/your-team">
                        <i><img className="navbar-icon pokeball" src={require("../assets/images/Header-icon/pokeball.png")} /></i>
                        <p className="link">Your team</p>
                    </Link>



                    <Link className="link-div" to="/battle">
                        <i><img className="navbar-icon card-icon" src={require("../assets/images/Header-icon/card-icon.png")} /></i>
                        <p className="link">Battle</p>
                    </Link>


                    <Link className="link-div" to="/login">
                        <i><img className="navbar-icon red-hat" src={require("../assets/images/Header-icon/red-hat.png")} /></i>
                        <p className="link">Login</p>
                    </Link>


                </nav>

                <div></div>

            </div>

        </header>
    )
}