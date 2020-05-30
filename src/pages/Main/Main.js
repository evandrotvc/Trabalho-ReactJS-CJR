import React from 'react';
import { Router } from "@reach/router";

import Home from '../Home';
import PerfilPokemon from '../PerfilPokemon/PerfilPokemon'
import Header from '../../components/Header/Header';
import Login from '../Login';
import Pokemon from '../Pokemons/Pokemon';
import Starred from '../Starred/Starred';
import DeleteStarred from '../DeleteStarred/DeleteStarred';
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
        <Starred path = "/users/:username/starred/:pokemon" />
        {/* <DeleteStarred path = "/users/:username/starred/:pokemon" /> */}
      </Router>
    </div>
  );
}

export default App;