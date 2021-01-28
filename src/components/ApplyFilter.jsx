import { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const sortByValue = (items, column) => (
  items.sort((a, b) => a[column] - b[column])
);

// sort by name
const sortByName = (items) => {
  const negativeOne = -1;
  const one = 1;
  const zero = 0;
  return (
    items.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return negativeOne;
      }
      if (nameA > nameB) {
        return one;
      }
      return zero;
    })
  );
};

function ApplyFilter() {
  const { data, filters, customFilter } = useContext(StarWarsContext);
  if (!data) return null;

  const orderData = () => {
    let newOrderData = [];
    const selectColumn = filters.order.column;
    if (selectColumn === 'name') {
      newOrderData = sortByName(data);
    } else {
      newOrderData = sortByValue(data, selectColumn);
    }
    if (filters.order.sort === 'DESC') {
      return newOrderData.reverse();
    }
    return newOrderData;
  };

  const nameFilter = filters.filterByName.name;
  const filteredByName = orderData().filter((planet) => planet.name.includes(nameFilter));
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

  return filteredByNumeric;
}

export default ApplyFilter;
