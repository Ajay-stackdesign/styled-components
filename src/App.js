import React from "react";
import styled from "styled-components";
import Car from "./Car";
import Employess from "./Employess";
import Reducer from "./Reducer";
// import App1 from "./reducer/App1";
import Layout from "./Layout";
import Refhook from "./Refhook";

// const userConnect = createContext()

const Button = styled.button`
color: blue;
background: red;
text-transform: uppercase;
`

const Input = styled.input`
border-color:red;

`


function App() {
  // const [user, setuser] = useState("ajay")
  

  return (
    <div className="App">
     <label for="username">Username:</label>
     <Input type= "text" name="username" required="required"/> 
     <label for="password">Password:</label>
     <Input type="password" name="password" />
     <Button>submit</Button>
     <Car />
     <Employess />
     {/* <userConnect.Provider value={user}>
      <App1 />
     </userConnect.Provider> */}

     <Reducer />
     <Layout />
     <Refhook />
    </div>
  );
}

export default App;
// export { userConnect }
