import React from 'react';
import Pokemons from "../pages/Pokemons/Pokemon";

const LogOut = () =>{
    localStorage.removeItem('user-token');

    return <Pokemons />
}

export default LogOut;