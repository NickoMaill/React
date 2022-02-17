import React from 'react';

class Favorites extends React.Component {

    constructor(){
        super()
        this.state = {
            movies: [],
            favIDs: this.getStorage

        }

        this.getStorage = this.getStorage.bind(this)
    }

    getStorage() {


    }

    render() {
        return (
            <div>
                <h1>Favorites</h1>
            </div>
        );
    }
}

export default Favorites;