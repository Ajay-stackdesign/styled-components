import React, { useEffect, useState } from "react";

const Timer = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
       let timer = setTimeout(() => {
            setCount((count) =>count + 5)
        }, 1000);
        return () => clearTimeout(timer)
    },[]);
    
    

    return(
        <div>
            <h1>i have rendered{count}</h1>
        </div>
    )
}


export default Timer