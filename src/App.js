import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import ScrollIntoView from "../src/Components/ScrollTop";

//Components
import Routers from "./Routers/Routers";

function App() {
  return (   
    <BrowserRouter>
    <ScrollIntoView>
        <div className="App"> 
            <Routers/> 
       </div>
       </ScrollIntoView>
    </BrowserRouter>  
  );
}

export default App;
