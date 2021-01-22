import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filter = () => {
    const { handleInput } = useContext(StarWarsContext);

    return(
        <header>
            <input
            type='text'
            data-testid='name-filter'
            onChange={(event) => handleInput(event)}/>
            <select data-testid='column-filter'>
                <option value='population'>population</option>
                <option value='orbital_period'>orbital_period</option>
                <option value='diameter'>diameter</option>
                <option value='rotation_period'>rotation_period</option>
                <option value='surface_water'>surface_water</option>
            </select>
            <select data-testid='comparison-filter'>
                <option value='>'>maior que</option>
                <option value='<'>menor que</option>
                <option value='==='>igual a</option>
            </select>
            <input
            type='number'
            data-testid='value-filter'
            />
        </header>
    )
};

export default Filter;