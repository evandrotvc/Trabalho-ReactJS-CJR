import React from 'react'

import { Link } from '@reach/router'

import styles from './Header.module.css'

const Header = () => (
    <header >
<<<<<<< HEAD
        <img src="https://img.icons8.com/color/48/000000/pokeball--v1.png" alt = "pokebola"/>
        <span className= {styles.pokedex}>Pokedex</span>
            <Link to="/login" >Meu Perfil</Link>
            <Link to="/sair" >Sair</Link>
=======
        <img className='pokebola' src="https://img.icons8.com/color/48/000000/pokeball--v1.png" alt = "pokebola"/>
        <h2 className= {styles.pokedex}>Pokedex</h2>
            <Link to="/pokemons/" >Home</Link>
            <Link to="/users/:username" >Perfil</Link>            

>>>>>>> origin/Merges
    </header>

)

export default Header;