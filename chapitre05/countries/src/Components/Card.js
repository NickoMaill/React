import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Card extends React.Component {




    render() {

        return (

            <div>

                <div>
                    <div className='d-flex flex-column align-items-center '>

                        <img className='w-75 mt-2 mb-4' src={`${this.props.flag}`} />

                        

                            <h2>Name : {this.props.name}</h2>
                            <h3>Capital : {this.props.capital}</h3>
                            <p>Population : {this.props.population}</p>
                            <p>Region : {this.props.region}</p>

                        

                    </div>

                </div>


            </div>

        )

    }

}

export default Card;