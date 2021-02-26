import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StartWarsContext';
import API from '../service';

export default function Provider({ children }) {
  const [dataOrigin, setDataOrigin] = useState([]);
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  let aux = [];

  const getPlanets = (async () => {
    aux = await API();
    setDataOrigin(aux);
    setData(aux);
  });

  useEffect(() => {
    getPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let temp = dataOrigin;
    
    const zero = 0;
    for (let i = zero; i < filters.filterByNumericValues.length; i += 1) {
      const { comparison, column, value } = filters.filterByNumericValues[i];
      switch (comparison) {
      case 'maior que':
        temp = (temp.filter((item) => Number(item[column]) > Number(value)));
        break;
      case 'menor que':
        temp = (temp.filter((item) => Number(item[column]) < Number(value)));
        break;
      case 'igual a':
        temp = (temp.filter((item) => Number(item[column]) === Number(value)));
        break;
      default:
        temp = (temp.filter((item) => Number(item[column]) === Number(value)));
        break;
      }
      if (!options[column]) {
        setOptions(options.filter((option) => option !== column));
        setClick(false);
      }
    }
    // console.log(temp);
    setData(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click, setClick, setOptions, filters.filterByNumericValues]);

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        filters,
        options,
        dataOrigin,
        click,
        setClick,
        setFilters,
        setData,
        setOptions,
      } }
    >
      { children}
    </StarWarsContext.Provider>);
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
