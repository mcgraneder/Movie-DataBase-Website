import React from 'react';

//import styles
import {GlobalStyle} from "./GlobalStyle";


//import components
import Header from "./components/Header";
import Home from "./components/Home"
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from './context';
import Login from './components/Login';


const App = () => (
    <Router className="App">
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/:movieId" element={<Movie/>} />
          <Route path="/*" element={<NotFound/>} />

        </Routes>
        <GlobalStyle />
      </UserProvider>

    </Router>
);


export default App;
