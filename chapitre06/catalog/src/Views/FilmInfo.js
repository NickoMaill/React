import React, { Component } from 'react';

class FilmInfo extends Component {
    render() {
        return (
            <div>
                <img/>
                <p>{this.props.match.params.id}</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        );
    }
}

export default FilmInfo;