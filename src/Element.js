import React from "react";
import Car from "./Car";

const Element = (props) => {
    const x = 5;

    // Note that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.
    return(
        <div>
            <h1>{x<10? "hello".toUpperCase() : "world".toUpperCase()}</h1>
            <h2>i am {props.name}</h2>
            <h2>i am {props.age}</h2>
            <>hello { props.edate } </>
            <Car />
        </div>
    )
}
export default Element