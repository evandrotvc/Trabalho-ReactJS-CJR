import React, { useState }  from 'react'

import { Link } from '@reach/router'

import styles from './Header.module.css'

const Header = () => {
    const [username , setUsername] = useState('')
    function ClickPerfil(){
        const getTodos = localStorage.getItem('user-token')
        if(getTodos){
            
             setUsername(JSON.parse(getTodos))            
        }
    }
    return (
    <header >
        <img src="https://img.icons8.com/color/48/000000/pokeball--v1.png" alt = "pokebola"/>
        <span className= {styles.pokedex}>Pokedex</span>
            <Link to="/users/">Login</Link>
            <Link to="/pokemons" >Home</Link>
            <Link to={`/users/${username.username}`}  onClick={() => ClickPerfil() }>Perfil</Link>
    </header>
    )

}

export default Header;