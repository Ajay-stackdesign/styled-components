import React, { useContext } from "react";
import { userConnect } from "../App";

const App3 = () => {
    const user = useContext(userConnect)
    return(
        <div>
            <h1>hello world</h1>
            
            <h1>{user}</h1>
        </div>
    )
}

export default App3