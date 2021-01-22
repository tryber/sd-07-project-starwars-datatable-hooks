import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filter = () => {
    const { handleInput } = useContext(StarWarsContext);

    return(
        <header>
            <input type='text'onChange={(event) => handleInput(event)}/>
        </header>
    )
};

export default Filter;