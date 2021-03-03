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
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  });

  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [orderOpt, setOrderOpt] = useState([
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
  ]);

  let aux = [];

  const getPlanets = (async () => {
    const menosum = -1;
    aux = await API();
    aux = aux.sort((a, b) => ((a.name > b.name) ? 1 : menosum));
    setDataOrigin(aux);
    setData(aux);
  });

  useEffect(() => {
    getPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const menosum = -1;
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
        temp = temp.sort((a, b) => ((a.name > b.name) ? 1 : menosum));
        break;
      }
      if (!options[column]) {
        setOptions(options.filter((option) => option !== column));
        setClick(false);
      }
    }

    const { column: oldColumn, sort } = filters.order;
    const column = oldColumn.toLowerCase();
    switch (sort) {
    case 'ASC':
      if (column === 'name') {
        temp = temp.sort((a, b) => (
          (a[column] > b[column]) ? 1 : menosum));
      } else {
        temp = temp.sort((a, b) => (
          (Number(a[column]) > Number(b[column])) ? 1 : menosum));
      }
      break;
    case 'DESC':
      if (column === 'name') {
        temp = temp.sort((a, b) => (
          (a[column] > b[column]) ? 1 : menosum)).reverse();
      } else {
        temp = temp.sort((a, b) => (
          (Number(a[column]) > Number(b[column])) ? 1 : menosum)).reverse();
      }
      break;

    default:
      temp = temp.sort((a, b) => ((a.name > b.name) ? 1 : menosum));
      break;
    }

    setData([...temp]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click, setClick, setOptions, filters.filterByNumericValues, filters.order]);

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        filters,
        options,
        dataOrigin,
        click,
        orderOpt,
        setOrderOpt,
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
