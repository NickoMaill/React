import { useState } from "react";

export default function Battle(){

    const [id, setId] = useState(null)

    const randomNumber = () => {
        setId(
            Math.floor(Math.random() * 721) + 1
        );
    };

    return(
        <h1>Battle</h1>
    )
}