import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import './style.css'

function Table() {
  const { planets } = useContext(StarWarsContext);
  const thead = planets[0] || [];
  return (  
    <table>
      <thead>
        <tr>
          {Object.keys(thead).map((column) => <th key={column}>{column}</th> )}
        </tr>
      </thead>
      <tbody>
          {planets.map((planet, index) => <tr key={index}>{Object.entries(planet).map((planet) => <td key={ planet[0] }>{planet[1]}</td>)}</tr> )}          
      </tbody>
    </table>
  );
}

export default Table;
