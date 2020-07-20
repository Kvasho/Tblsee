import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";

//Components
import Routers from "./Routers/Routers";

function App() {
  return (   
    <BrowserRouter>
      <div className="App">
        
            <Routers/>
        
      </div>
    </BrowserRouter>  
  );
}

export default App;
