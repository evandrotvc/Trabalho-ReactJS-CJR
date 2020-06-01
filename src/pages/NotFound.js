import React from 'react';
import { Link } from '@reach/router';

const NotFound = () => {

    return (
        <>
            <h1>Página não Encontrada..</h1>
            <Link to="/pokemons">Retornar</Link>
        </>
    );

}

export default NotFound;