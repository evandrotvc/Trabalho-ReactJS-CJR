import React from 'react';
import { Router } from "@reach/router";

import Home from '../Home';
import PerfilPokemon from '../PerfilPokemon/PerfilPokemon'
import Header from '../../Components/Header/Header';
import Login from '../Login';
import Pokemon from '../Pokemons/Pokemon';
import './Main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Login path="/"/>
        <Pokemon path="/pokemons"/>
        <Home path = "/home" />
        <PerfilPokemon path = "/pokemons/:name"/>
      </Router>
    </div>
  );
}

export default App;