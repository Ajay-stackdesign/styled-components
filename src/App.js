import React from "react";
import styled from "styled-components";
import Car from "./Car";


const Button = styled.button`
color: blue;
background: red;
text-transform: uppercase;
`

const Input = styled.input`
border-color:red;

`

function App() {
  return (
    <div className="App">
     <label for="username">Username:</label>
     <Input type= "text" name="username" required="required"/> 
     <label for="password">Password:</label>
     <Input type="password" name="password" />
     <Button>submit</Button>
     <Car />
    </div>
  );
}

export default App;
