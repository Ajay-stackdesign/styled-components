import React,{ useRef, useState } from "react";

const Refhook = () => {
    const inputElement = useRef()
    const [input, setInput] = useState("ajay");

    const onclick = () => {
        inputElement.current.focus()
    }
    const handleChange =(event) => {
        setInput(event.target.value)
    }
    return(
        <div>
            <input type="text" ref={inputElement} /> 
            <button onClick={onclick}>click me</button>
            <h1>{input}</h1>
            <input type="text" onChange={handleChange} /> 

        </div>
    )
}

export default Refhook