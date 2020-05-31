import React from 'react'

import { Link } from '@reach/router'

import styles from './Header.module.css'

const Header = () => (
    <header >
        <img src="https://img.icons8.com/color/48/000000/pokeball--v1.png" alt = "pokebola"/>
        <h1 className= {styles.pokedex}>Pokedex</h1>
            <div className="links">
                <Link to="/pokemons" >Home</Link>
                <Link to="/login" >Perfil</Link>
            </div>
    </header>

)

export default Header;