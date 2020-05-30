import React from "react";
import './Modal.css'

const Modal = ({ id = 'modal', setPokemonProfile}) => {

    const handleOutsideClose = (e) => {
        if (e.target.id === id) setPokemonProfile (false);
    }

    return <div id={id} onClick={handleOutsideClose} className="container">
        
        <div  className= "modal">

            <button onClick={() => setPokemonProfile(false)} className= "close">X</button>
            <div className= "perfilPokemon">
                <h1>Perfil</h1>
            </div>

        </div>

    </div>
        
};
export default Modal;