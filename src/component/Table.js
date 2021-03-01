import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, name, data2, setData, setFilters, filters } = useContext(StarWarsContext);

  const [aux, setAux] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  // const handleFilter = () => {
  //   const { filterByNumericValues } = filters;
  //   let auxData = data2;

  //   for (let index = 0; index < filterByNumericValues.length; index++) {
  //     const { column, comparison, value } = filters.filterByNumericValues[index];

  //     switch (comparison) {
  //     case 'maior que':
  //       auxData = auxData.filter((e) => Number(e[column] > Number(e[value])));
  //       break;
  //     case 'menor que':
  //       auxData = auxData.filter((e) => Number(e[column] < Number(e[value])));
  //       break;
  //     case 'igual a':
  //       auxData = auxData.filter((e) => Number(e[column] === Number(e[value])));
  //       break;
  //     default:
  //       break;
  //     }
  //     setData(auxData);
  //   }
  //   console.log(auxData);
  // };

  const handleClick = () => {
    const { column, value } = aux;
    if (column && value) {
      setFilters({ ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, aux] });
      // handleFilter();
    }
    // for (let index = 0; index < filterByNumericValues.length; index++) {
    //   const { column, comparison, value } = filters.filterByNumericValues[index];

    //   switch (comparison) {
    //   case 'maior que':
    //     auxData = auxData.filter((e) => Number(e[column] > Number(e[value])));
    //     break;
    //   case 'menor que':
    //     auxData = auxData.filter((e) => Number(e[column] < Number(e[value])));
    //     break;
    //   case 'igual a':
    //     auxData = auxData.filter((e) => Number(e[column] === Number(e[value])));
    //     break;
    //   default:
    //     break;
    //   }
    //   setData(auxData);
    // }
    // console.log(auxData);
  };

  return (
    <table>
      {console.log(aux)}
      <select
        data-testid="column-filter"
        onChange={ (e) => setAux({ ...aux, column: (e.target.value) }) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ (e) => setAux({ ...aux, comparison: (e.target.value) }) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setAux({ ...aux, value: (e.target.value) }) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filtro
      </button>

      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          data ? data.filter((element) => element.name.toLowerCase().includes(name))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            )) : <span>Loading...</span>
        }
      </tbody>
    </table>
  );
}

export default Table;
