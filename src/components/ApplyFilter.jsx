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
  const { column, comparison, value } = filters.filterByNumericValues[0];
  let filteredByNumeric = filteredByName;
  const excludeUnknown = filteredByName.filter((planet) => planet[column] !== 'unknow');
  switch (comparison) {
  case 'maior que':
    filteredByNumeric = excludeUnknown
      .filter((planet) => planet[column] > parseInt(value, 10));
    break;
  case 'menor que':
    filteredByNumeric = excludeUnknown
      .filter((planet) => planet[column] < parseInt(value, 10));
    break;
  case 'igual a':
    filteredByNumeric = excludeUnknown
      .filter((planet) => planet[column] === value);
    break;
  default:
    break;
  }

  return filteredByNumeric;
}

export default ApplyFilter;
