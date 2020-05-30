import React from 'react'

import { Link } from '@reach/router'

import styles from './Header.module.css'

const Header = () => (
    <header >
        <img src="https://img.icons8.com/color/48/000000/pokeball--v1.png" alt = "pokebola"/>
        <span className= {styles.pokedex}>Pokedex</span>
            <Link to="/" >Home</Link>
            <Link to="/login" >Perfil</Link>
    </header>

)

export default Header;