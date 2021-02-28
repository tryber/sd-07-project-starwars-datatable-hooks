import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';
import { trs } from '../service/helper';

function StarWarsTable() {
  const {
    data,
    dataApi,
    searchTerm,
  } = useContext(Context);

  const byValue = searchTerm.filters.filterByNumericValues;
  useEffect(() => {
    dataApi();
  });

  function masterFilter() {
    let initialArray = data;
    const magicNumber = 0;
    if (byValue.length === magicNumber) return data;

    byValue.forEach((element) => {
      if (element.comparison === 'maior que') {
        initialArray = initialArray.filter((dataElement) => (
          (element.value < parseInt(dataElement[element.column], 10))));
      }
      if (element.comparison === 'menor que') {
        initialArray = initialArray.filter((dataElement) => (
          (element.value > parseInt(dataElement[element.column], 10))));
      }
      if (element.comparison === 'igual a') {
        initialArray = initialArray.filter((dataElement) => (
          (element.value === dataElement[element.column])));
      }
      return initialArray;
    });
    return initialArray;
  }
  const orderToMe = (a, b) => {
    const numericColumn = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ];
    const magicNumber = -1;
    const { column, sort } = searchTerm.filters.order;
    if (numericColumn.includes(column)) {
      if (sort === 'ASC') {
        return (a[column] - b[column]);
      }
      return (b[column] - a[column]);
    }
    if (sort === 'ASC') {
      return (a[column] > b[column] ? 1 : magicNumber);
    }
    return (a[column] < b[column] ? 1 : magicNumber);
  };
  const { filters: { filterByName: { name } } } = searchTerm;

  return (
    <table>
      <thead>
        <tr>
          {trs.map((item, index) => (
            <th key={ index }>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {masterFilter() && masterFilter().sort(orderToMe)
          .filter((element) => element.name.toLowerCase()
            .includes(name.toLowerCase()))
          .map((element) => (
            <tr key={ element.name }>
              <td data-testid="planet-name">{ element.name }</td>
              <td>{ element.rotation_period }</td>
              <td>{ element.orbital_period }</td>
              <td>{ element.diameter }</td>
              <td>{ element.climate }</td>
              <td>{ element.gravity }</td>
              <td>{ element.terrain }</td>
              <td>{ element.surface_water }</td>
              <td>{ element.population }</td>
              <td>{ element.films }</td>
              <td>{ element.created }</td>
              <td>{ element.edited }</td>
              <td>{ element.url }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default StarWarsTable;
