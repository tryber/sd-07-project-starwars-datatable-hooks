import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StartWarsContext';
import API from '../service';

export default function Provider({ children }) {
  const [dataOrigin, setDataOrigin] = useState([]);
  const [data, setData] = useState([]);
  const [filtred, setFiltred] = useState([]);
  const [click, setClick] = useState(false);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  // const [filters, setFilters] = useState({
  //   filterOption: 'population',
  //   filterComparison: 'maior que',
  //   filterValue: '',
  // });
  const [options, setOptions] = useState({
    population: true,
    orbital_period: true,
    diameter: true,
    rotation_period: true,
    surface_water: true,
  });

  let aux = [];

  const getPlanets = async () => {
    aux = await API();
    setDataOrigin(aux);
    setData(aux);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  // useEffect(() => {
  //   if (name === '') {
  //     getPlanets();
  //   } else {
  //     setData(data.filter((item) => item.name.toLowerCase().includes(name)));
  //   }
  //   // eslint-disable-next-line
  // }, [name, setName, setFilters, filters.filterValue]);

  useEffect(() => {
    let temp = dataOrigin;
    const zero = 0;
    for (let i = zero; i < filters.filterByNumericValues.length; i++) {
      // const element = filters.filterByNumericValues[i];
      const { comparison, columnn, value } = filters.filterByNumericValues[i];
      switch (comparison) {
      case 'maior que':
        setData(temp.filter((item) => Number(item[columnn]) > Number(value)));
        break;
      case 'menor que':
        setData(temp.filter((item) => Number(item[columnn]) < Number(value)));
        break;
      case 'igual a':
        setData(temp.filter((item) => Number(item[columnn]) === Number(value)));
        break;
      default:
        getPlanets();
        break;
      }
      if (!options[columnn]) {
        // delete options[filterOption];
        setClick(false);
      }
      setData(temp);
    }
    // const { filterComparison, filterOption, filterValue } = filters;
    // switch (filterComparison) {
    // case 'maior que':
    //   setData(temp.filter((item) => Number(item[filterOption]) > Number(filterValue)));
    //   break;
    // case 'menor que':
    //   setData(temp.filter((item) => Number(item[filterOption]) < Number(filterValue)));
    //   break;
    // case 'igual a':
    //   setData(temp.filter((item) => Number(item[filterOption]) === Number(filterValue)));
    //   break;
    // default:
    //   getPlanets();
    //   break;
    // }
    // if (!options[columnn]) {
    //   // delete options[filterOption];
    //   setClick(false);
    // }
    // setData(temp);
    // eslint-disable-next-line
  }, [click, setClick, setOptions]);

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        name,
        filters,
        options,
        click,
        filtred,
        dataOrigin,
        setFilters,
        setData,
        // result,
        // setResult,
        setFiltred,
        setName,
        setOptions,
        setClick,
      } }
    >
      { children}
    </StarWarsContext.Provider>);
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
