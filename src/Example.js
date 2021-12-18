import React, { useEffect, useState } from "react"

const Example = () => {
    const [count, setCount] = useState(0)

    // using useEffect 
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1 )
        },1000)
    },[])

    return(
        <div>
            {/* <h1>hello{count}</h1>
            <button onClick={() => setCount(count + 1)}>click Me</button> */}
            <h1>u have count{count}</h1>
        </div>
    )
}


export default Example