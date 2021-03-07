import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsAPI from '../services/StarWarsAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        column: 'name',
        sort: 'ASC',
      },
    },
  );

  let aux = [];
  const fetchData = async () => {
    const menosum = -1;
    aux = await planetsAPI();
    aux.sort((a, b) => ((a.name > b.name) ? 1 : menosum));
    setData2(aux);
    setData(aux);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const menosum = -1;
    let auxData = data2;
    const zero = 0;
    for (let index = zero; index < filters.filterByNumericValues.length; index += 1) {
      const { column, comparison, value } = filters.filterByNumericValues[index];

      switch (comparison) {
      case 'maior que':
        auxData = (auxData.filter((e) => Number(e[column]) > Number(value)));
        break;
      case 'menor que':
        auxData = (auxData.filter((e) => Number(e[column]) < Number(value)));
        break;
      case 'igual a':
        auxData = (auxData.filter((e) => Number(e[column]) === Number(value)));
        break;
      default:
        auxData = (auxData.filter((e) => Number(e[column]) === Number(value)));
        break;
      }
    }

    const { column: column2, sort } = filters.order;
    const column = column2.toLowerCase();

    switch (sort) {
    case 'ASC':
      if (column === 'name') {
        auxData = auxData.sort((a, b) => ((a[column] > b[column]) ? 1 : menosum));
      } else {
        auxData = auxData.sort((a, b) => (
          (Number(a[column]) > Number(b[column])) ? 1 : menosum));
      }
      break;
    case 'DESC':
      if (column === 'name') {
        auxData = auxData.sort((a, b) => (
          (a[column] > b[column]) ? 1 : menosum)).reverse();
      } else {
        auxData = auxData.sort((a, b) => (
          (Number(a[column]) > Number(b[column])) ? 1 : menosum)).reverse();
      }
      break;
    default:
      auxData = auxData.sort((a, b) => ((a.name > b.name) ? 1 : menosum));
      break;
    }

    setData([...auxData]);
    // console.log(auxData);
  }, [filters.filterByNumericValues, filters.order]);

  const context = {
    data,
    data2,
    name,
    filters,
    setName,
    setFilters,
    setData,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
