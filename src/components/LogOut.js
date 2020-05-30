import React from 'react';
import Pokemons from "../pages/Pokemons/Pokemon";

const LogOut = () =>{
    sessionStorage.removeItem('user-token');

    return <Pokemons />
}

export default LogOut;