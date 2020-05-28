import React from 'react';
import {Router} from "@reach/router";

import Header from '../components/Header';
import Login from './Login';
import Pokemon from './Pokemon';
import './Main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Login path="/"/>
        <Pokemon path="/pokemons"/>
      </Router>
    </div>
  );
}

export default App;
