import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsAPI from '../services/StarWarsAPI';

function Provider({ children }) {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [name, setName] = useState('');
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        column: '',
        sort: '',
      },
    },
  );

  let aux = [];

  const fetchData = async () => {
    aux = await planetsAPI();
    setData(aux);
    setData2(aux);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
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
      setData(auxData);
    }
    console.log(auxData);
  }, [filters.filterByNumericValues]);

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
