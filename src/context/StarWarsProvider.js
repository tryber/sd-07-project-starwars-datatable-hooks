import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StartWarsContext';
import API from '../service';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState({
    filterOption: 'population',
    filterComparison: 'maior que',
    filterValue: '',
  });
  const [options, setOptions] = useState({
    population: true,
    orbital_period: true,
    diameter: true,
    rotation_period: true,
    surface_water: true,
  });

  const getPlanets = async () => { setData(await API()); };

  useEffect(() => {
    if (name === '') {
      getPlanets();
    } else {
      setData(data.filter((item) => item.name.toLowerCase().includes(name)));
    }
  }, [name, setName]);

  useEffect(() => {
    const { filterComparison, filterOption, filterValue } = filters;
    switch (filterComparison) {
    case 'maior que':
      setData(data.filter((item) => Number(item[filterOption]) > Number(filterValue)));
      break;
    case 'menor que':
      setData(data.filter((item) => Number(item[filterOption]) < Number(filterValue)));
      break;
    case 'igual a':
      setData(data.filter((item) => Number(item[filterOption]) === Number(filterValue)));
      break;
    default:
      getPlanets();
      break;
    }
    setOptions({ ...options });
  }, [click, setClick]);

  return (
    <StarWarsContext.Provider
      value={ {
        data, name, filters, options, click, setName, setOptions, setFilters, setClick,
      } }
    >
      { children}
    </StarWarsContext.Provider>);
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
