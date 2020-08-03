


import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import ScrollIntoView from "../src/Components/ScrollTop";

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
//Components
import Routers from "./Routers/Routers";

function App() {
  const { t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
 
  return (   
    <BrowserRouter>
    <ScrollIntoView>
        <div className="App"> 
            <Routers t={t}/> 
       </div>
       </ScrollIntoView>
    </BrowserRouter>  
  );
}

export default App;
