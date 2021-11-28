import React, { useEffect, useRef, useState } from "react";

const Render = () => {
    const [input, setInput] = useState(0)
    const count = useRef(0)

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    useEffect(() => {
        count.current = count.current +1
    })


    return(
        <div>
            <input type="text"
            value={input}
            onChange={handleChange}/>

            <h1>i have render{count.current}</h1>
        </div>
    )
}

export default Render