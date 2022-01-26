import React from "react";

class UsersInfo extends React.Component {


    render() {


        return (

            <div>

                <h3>{this.props.name}</h3>
                <p>{this.props.email}</p>
                <p>{this.props.website}</p>

            </div>

        )

    }

}

export default UsersInfo;