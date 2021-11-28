import React, { useState } from "react";

const Road = () => {
    const [update , setUpdate] = useState("hello")
    
    const updateContent = (event) => {
        setUpdate(event.target.value);
    }
    return(
        <div>
            <h1>hello world</h1>
            <h1>hello app kaise ho</h1>
            {/* <button onClick={updateContent}>click me</button> */}
            <form >
                <input type ="text" onChange={updateContent}/>
                <h1>{update}</h1>
            </form>
        </div>
    )
}


export default Road
