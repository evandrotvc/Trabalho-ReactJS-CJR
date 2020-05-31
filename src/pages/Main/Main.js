import React from 'react';
import { Router } from "@reach/router";

import Home from '../Home';
import PerfilPokemon from '../PerfilPokemon/PerfilPokemon'
import Header from '../../components/Header/Header';
import Login from '../Login';
import Pokemon from '../Pokemons/Pokemon';
import PerfilUser from '../PerfilUser/PerfilUser';

import './Main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Login path="/login"/>
        <Pokemon path="/pokemons"/>
        <Home path = "/home" />
        <PerfilPokemon path = "/pokemons/:name"/>
        <PerfilUser path = "/users/:username" />
      </Router>
    </div>
  );
}

export default App;