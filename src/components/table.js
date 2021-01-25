import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    data,
    filters,
    column,
    comparison,
    value,
    filterData,
    setFilterData,
    useFilter,
    sortedData,
    useSortedData,
  } = useContext(StarWarsContext);

  useEffect(() => {
    const makeComparison = (planet) => {
      switch (comparison) {
      case 'maior que':
        return parseInt(planet[column], 10) > parseInt(value, 10);
      case 'menor que':
        return parseInt(planet[column], 10) < parseInt(value, 10);
      case 'igual a':
        return parseInt(planet[column], 10) === parseInt(value, 10);
      default:
      }
    };

    setFilterData(() => {
      const minLength = 0;
      if (data.length > minLength) {
        const search = filters.filterByName.name;
        if (useFilter) {
          return data.filter((planet) => planet.name.includes(search)
            && makeComparison(planet));
        }
        return data.filter((planet) => planet.name.includes(search));
      }
      return data;
    });
  }, [filters, data]);

  const renderTableData = (dataState) => dataState.map((planet) => (
    <tr key={ planet.name }>
      <td>{planet.climate}</td>
      <td>{planet.created}</td>
      <td>{planet.diameter}</td>
      <td>{planet.edited}</td>
      <td>{planet.films}</td>
      <td>{planet.gravity}</td>
      <td data-testid="planet-name">{planet.name}</td>
      <td>{planet.orbital_period}</td>
      <td>{planet.population}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.surface_water}</td>
      <td>{planet.terrain}</td>
      <td>{planet.url}</td>
    </tr>
  ));

  const renderTableHeader = () => {
    const header = [
      'climate',
      'created',
      'diameter',
      'edited',
      'films',
      'gravity',
      'name',
      'orbital_period',
      'population',
      'rotation_period',
      'surface_water',
      'terrain',
      'url',
    ];
    return header.map((key, index) => <th key={ index }>{key}</th>);
  };

  return (
    <StarWarsContext.Consumer>
      {() => (
        <div>
          <h1>Tabela</h1>
          <table>
            <tbody>
              <tr>{renderTableHeader()}</tr>
              {renderTableData(useSortedData ? sortedData : filterData)}
            </tbody>
          </table>
        </div>
      )}
    </StarWarsContext.Consumer>
  );
}

export default Table;
