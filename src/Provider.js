import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StarWarsContext from './context/StarWarsContext';
import getCurrencePlanets from './services/planetsApi';

function Provider({ children }) {
  const zero = 0;
  const one = 1;
  const oneNegative = -1;

  const columnsSave = [[
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
    'population']];
  const [filterName, setFilterByName] = useState('');
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [tagCompare, setTagCompare] = useState('');
  const [tag, setTag] = useState('igual a');
  const [valueCompare, setValueCompare] = useState('');
  const [filter, setFilter] = useState(false);
  const [filter2, setFilter2] = useState(true);
  const [primaryFilter, setPrimaryFilter] = useState([]);
  const [columns, setColomns] = useState(columnsSave);
  const [sortTag, setSortTag] = useState('Name');
  const [sortOption, setSortOption] = useState('ASC');
  const [sortStatus, setSortStatus] = useState(false);

  const [filters, setfilters] = useState(
    {
      filterByName: {
        name: filterName,
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },

      ],
      order: {
        column: 'Name',
        sort: 'ASC',
      },
    },
  );

  const dataTags = data[0] || [];

  const filterCompare = (comparison, arrayFilter, column, value) => {
    if (comparison === 'igual a') {
      return arrayFilter.filter((item) => Number(item[column]) === Number(value));
    } if (comparison === 'maior que') {
      return arrayFilter.filter((item) => Number(item[column]) > Number(value));
    } if (comparison === 'menor que') {
      return arrayFilter.filter((item) => Number(item[column]) < Number(value));
    }
  };

  const sorted = (type, name, array) => {
    if (type === 'ASC') {
      return array.sort((a, b) => Number(a) - Number(b));
    }
    return array.sort((a, b) => Number(b[name]) - Number(a[name]));
  };

  const sortedName = (a, b) => {
    if (a.name > b.name) {
      return one;
    }
    if (a.name < b.name) {
      return oneNegative;
    }

    return zero;
  };

  useEffect(() => {
    getCurrencePlanets('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => setData((response.results.sort(sortedName))));
  }, []);

  useEffect(() => {
    setDataFilter(data);
  }, [data]);

  const myContext = {
    data,
    filter,
    columns,
    filter2,
    primaryFilter,
    tag,
    valueCompare,
    tagCompare,
    dataHeader: Object.keys(dataTags).filter(
      (item) => item !== 'residents',
    ),
    sortTag,
    sortOption,
    sortStatus,
    setSortStatus,
    sorted,
    setSortOption,
    setSortTag,
    setFilter2,
    setColomns,
    setPrimaryFilter,
    setFilterByName,
    setTagCompare,
    setTag,
    setValueCompare,
    setFilter,
    setfilters,
    filterName,
    dataFilter,
    setDataFilter,
    filters,
    setData,
    filterCompare,

  };

  return (
    <StarWarsContext.Provider value={ myContext }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
