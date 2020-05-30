import React from 'react'

import { Link } from '@reach/router'

import styles from './Header.module.css'
const Header = () => (
    <header >
        <img src="https://img.icons8.com/color/48/000000/pokeball--v1.png" alt = "pokebola"/>
        <h2 className= {styles.pokedex}>Pokedex</h2>
            <Link to="/" >Link 1</Link>
            <Link to="/" >Link 1</Link>
            <Link to="/" >Link 1</Link>

    </header>

)

export default Header;