import React from "react";
import './Modal.css';
import PerfilPokemon from '../pages/PerfilPokemon/PerfilPokemon';

const Modal = ({ id = 'modal', setPokemonProfile}) => {

    const handleOutsideClose = (e) => {
        if (e.target.id === id) setPokemonProfile (false);
    }

    return <div id={id} onClick={handleOutsideClose} className="container">
        
        <div  className= "modal">

            <button onClick={() => setPokemonProfile(false)} className= "close">X</button>
            <div className= "perfilPokemon">
                <h1>Perfil</h1>
                <PerfilPokemon/>
            </div>

        </div>

    </div>
        
};
export default Modal;