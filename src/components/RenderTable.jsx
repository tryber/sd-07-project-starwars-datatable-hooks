import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';


const RenderTable = props => {
    const context = useContext(StarWarsContext);
    // console.log(context) obj {state: initialState, setState: fn}
    return(
        <div>
            <span></span>
            <h1>Eu sou o RenderTable</h1>
        </div>
    )
}

export default RenderTable;
