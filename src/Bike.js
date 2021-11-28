import React, { useState } from "react";

const Bike = () => {
    const [bike, setBike] = useState({
        name:"apache",
        year: 2021,
        model: "bs6",
        color: "red"

    })
    const handleChange = () => {
        setBike(previousState => {
            return{...previousState,color: "white"}
        })
    }

    return(
        <div>
            <h1>{bike.color}</h1>
            <button onClick={handleChange}>blue</button>
        </div>
    )
}


export default Bike