import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const RenderForm = props => {
    const context = useContext(StarWarsContext);
    // console.log(context) obj {state: initialState, setState: fn}
    return(
        <div>
            <h1>Eu sou o RenderForm</h1>
        </div>
    )
}

export default RenderForm;