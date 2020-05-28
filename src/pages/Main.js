import React  from 'react'

import {Router} from '@reach/router'

import Home from '../pages/Home'
import PerfilPokemon from '../pages/PerfilPokemon/PerfilPokemon'

import Header from '../components/Header/Header'

const Main = () =>{
   
    return (
    <>
    <Header />
    <Router>
        <Home path = "/" />
        <PerfilPokemon path = "/bumb" />
    </Router>


    </>
  )
}

export default Main