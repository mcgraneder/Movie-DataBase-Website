import React from 'react';

//import styles
import {GlobalStyle} from "./GlobalStyle";


//import components
import Header from "./components/Header";
import Home from "./components/Home"


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
