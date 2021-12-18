import React, { useEffect, useState } from "react"

const Counter = () => {
    const [count , setCount ] = useState(0)
    const [Calculation, setCalculation ] = useState(0)

    useEffect(() => {
        setCalculation(() => count * 5)
    },[count])

    return(
        <div>
            <h1>i have rendered{count}</h1>
            <button onClick={() => setCount(count + 1 )}>click me</button>
            <h2>{Calculation}</h2>
        </div>
    )
}


export default Counter
