import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table (){
    const { data } = useContext(StarWarsContext);
    console.log(data);
return(
    <table>
        <thead>
        <tr>
            <th>climate</th>
            <th>created</th>
            <th>diameter</th>
            <th>edited</th>            
            <th>gravity</th>
            <th>name</th>
            <th>orbital_period</th>
            <th>population</th>            
            <th>rotation_period</th>
            <th>surface_water</th>
            <th>terrain</th>
            <th>url</th>
            <th>films</th>
        </tr>
        </thead>
        <tbody>       
            {data.map((planet, index) => 
                <tr key={index}>
                    <td>{planet.climate}</td>
                    <td>{planet.created}</td>
                    <td>{planet.diameter}</td>
                    <td>{planet.edited}</td>
                    <td>{planet.gravity}</td>
                    <td>{planet.name}</td>
                    <td>{planet.orbital_period}</td>
                    <td>{planet.population}</td>
                    <td>{planet.rotation_period}</td>
                    <td>{planet.surface_water}</td>
                    <td>{planet.terrain}</td>
                    <td>{planet.url}</td>
                    <td>{planet.films.map((film, i) => <td key={i}>{film}</td>)}</td>
                </tr>
            )}
        </tbody>
    </table>
);

}


export default Table;