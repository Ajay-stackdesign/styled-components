import React from "react";

const Shoot = () => {

    const change = () => {
        alert ("hello world")
    }
    const Shoot = (a,b) => {
        alert(b.type)
    }


    return(
        <div>
            <button onClick={change}>click me</button>
            <button onClick={(event) => {Shoot("ajay",event)}}>click me</button>
            {/* <h1>i am {Props.brand}</h1> */}
        </div>
    )
}
export default Shoot