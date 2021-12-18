import React, { useState } from "react";


const Form = () => {
    const [car, setCar] = useState("audi")
    const [name, setName] = useState("ajay");
    const [textArea, setTextARea] = useState ("text")

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`i am entering the caption ${name}`)
    }

    const changeText = (e) => {
        setName(e.target.value)
    }

    const handleChange = (event) =>{
        setTextARea(event.target.value)
    }
    const carModel = (e) => {
        setCar (e.target.value)
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>Enter the name</label>
            <input type="text" 
            name="username" onChange={changeText} />
            <label>enter the text</label>
            <input type="textarea" onChange={handleChange}/>
            <h2>{textArea}</h2>
            <select value={car} onChange={carModel}>
                <option value="ford">ford</option>
                <option value="bmw">bMw</option>
                <option value="mercedy">mercedy</option>
            </select>
            </form>
            <h1>{name}</h1>
        </div>
    )
}

export default Form
