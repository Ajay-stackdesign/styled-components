import React, { useEffect, useLayoutEffect, useState } from "react";

const Layout = () => {
    const [user, setUser] = useState("ajay")

    useEffect(() => {
        setUser("geeta");
    },[])

    // console.log("hello ")

    useLayoutEffect(() => {
        setUser("sahani")
    },[])

    return(
        <div>
            <h1>hello</h1>
            <h2>{user}</h2>
            <h2>{user}</h2>
        </div>
    )
}

export default Layout