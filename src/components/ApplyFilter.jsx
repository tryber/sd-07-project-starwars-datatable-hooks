import { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function ApplyFilter() {
  const { data, filters, customFilter } = useContext(StarWarsContext);
  if (!data) return null;
  const nameFilter = filters.filterByName.name;
  const filteredByName = data.filter((planet) => planet.name.includes(nameFilter));
  if (!customFilter) {
    return filteredByName;
  }
  let filteredByNumeric = filteredByName;

  filters.filterByNumericValues.forEach((filter) => {
    const { column, comparison, value } = filter;
    filteredByNumeric = filteredByNumeric
      .filter((planet) => planet[column] !== 'unknow');

    switch (comparison) {
    case 'maior que':
      filteredByNumeric = filteredByNumeric
        .filter((planet) => planet[column] > parseInt(value, 10));
      break;
    case 'menor que':
      filteredByNumeric = filteredByNumeric
        .filter((planet) => planet[column] < parseInt(value, 10));
      break;
    case 'igual a':
      filteredByNumeric = filteredByNumeric
        .filter((planet) => planet[column] === value);
      break;
    default:
      break;
    }
  });
  console.log(filteredByNumeric);
  return filteredByNumeric;
}

export default ApplyFilter;
