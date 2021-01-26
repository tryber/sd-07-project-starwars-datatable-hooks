import React, { useState, useContext, useEffect, useCallback } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../css/Table.css';

function Table() {
  const {
    isFetching,
    planets,
    keysPlanets,
    setkeysPlanets,
    filters,
    filters: {
      filterByName: { name },
      filterByNumericValues,
      order: { column, sort },
    },
  } = useContext(StarWarsContext);

  const [filterPlanets, setfilterPlanets] = useState(planets);

  const keysTable = () => {
    if (!isFetching) {
      // console.log(planets);
      const keys = Object.keys(planets[0]).filter((key) => key !== 'residents');
      setkeysPlanets(keys);
      // console.log(keys);
    }
  };

  useEffect(keysTable, []);

  const sortFilterPlanets = useCallback((sortPlanets) => {
    const defaultNumber = 0;
    const orderNumber = 1;
    const optionsNumericDefault = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    if (optionsNumericDefault.some((number) => column === number)) {
      if (sort === 'ASC') {
        return sortPlanets.sort((a, b) => {
          if (parseInt(a[column], 10) > parseInt(b[column], 10)) return orderNumber;
          if (parseInt(a[column], 10) < parseInt(b[column], 10)) return -orderNumber;
          return defaultNumber;
        });
      }
      if (sort === 'DESC') {
        return sortPlanets.sort((a, b) => {
          if (parseInt(a[column], 10) > parseInt(b[column], 10)) return -orderNumber;
          if (parseInt(a[column], 10) < parseInt(b[column], 10)) return orderNumber;
          return defaultNumber;
        });
      }
    } else {
      if (sort === 'ASC') {
        return sortPlanets.sort((a, b) => {
          if (a[column] > b[column]) return orderNumber;
          if (a[column] < b[column]) return -orderNumber;
          return defaultNumber;
        });
      }
      if (sort === 'DESC') {
        return sortPlanets.sort((a, b) => {
          if (a[column] > b[column]) return -orderNumber;
          if (a[column] < b[column]) return orderNumber;
          return defaultNumber;
        });
      }
    }
  }, [column, sort]);

  useEffect(() => {
    let newPlanets = planets.filter((planet) => planet.name.includes(name));
    filterByNumericValues.forEach((filterNumerics) => {
      switch (filterNumerics.comparison) {
      case 'maior que':
        (newPlanets = newPlanets.filter(
          (planet) => parseInt(planet[filterNumerics.column], 10)
            > parseInt(filterNumerics.value, 10),
        ));
        break;
      case 'menor que':
        (newPlanets = newPlanets.filter(
          (planet) => parseInt(planet[filterNumerics.column], 10)
            < parseInt(filterNumerics.value, 10),
        ));
        break;
      case 'igual a':
        (newPlanets = newPlanets.filter(
          (planet) => parseInt(planet[filterNumerics.column], 10)
            === parseInt(filterNumerics.value, 10),
        ));
        break;
      default:
        return newPlanets;
      }
    });
    // console.log(newPlanets);
    const newPlanetsSort = sortFilterPlanets(newPlanets);
    setfilterPlanets(newPlanetsSort);
  }, [filterByNumericValues, filters, name, planets, sortFilterPlanets]);

  return (
    <table>
      <thead>
        <tr>
          {keysPlanets.map((titleTable) => (
            <th key={ titleTable }>{titleTable}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filterPlanets.map((rowTable) => (
          <tr key={ rowTable.name }>
            {keysPlanets.map((infoRow) => {
              if (infoRow === 'name') {
                return (
                  <td key={ infoRow } data-testid="planet-name">
                    {rowTable[infoRow].toString()}
                  </td>
                );
              }
              return (
                <td key={ infoRow }>{rowTable[infoRow].toString()}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
