import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StarWarsContext from './context/StarWarsContext';
import getCurrencePlanets from './services/planetsApi';

function Provider({ children }) {
  const [filterName, setFilterByName] = useState('');
  const [data, setData] = useState([]);
  const [tagCompare, setTagCompare] = useState('');
  const [tag, setTag] = useState('');
  const [valueCompare, setValueCompare] = useState('');
  const [filter, setFilter] = useState(false);
  const [tagCompareSecond, setTagCompareSecond] = useState('');
  const [tagSecond, setTagSecond] = useState('');
  const [valueCompareSecond, setValueCompareSecond] = useState('');
  const [primaryFilter, setPrimaryFilter] = useState([]);
  const dataTags = data[0] || [];
  useEffect(() => {
    getCurrencePlanets('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => setData(response.results));
  }, []);

  const myContext = {
    data,
    filter,
    primaryFilter,
    dataHeader: Object.keys(dataTags).filter(
      (item) => item !== 'residents',
    ),
    setPrimaryFilter,
    setFilterByName,
    setTagCompare,
    setTag,
    setValueCompare,
    setFilter,
    setTagCompareSecond,
    setTagSecond,
    setValueCompareSecond,
    filters: {
      filterByName: {
        name: filterName,
      },
      filterByNumericValues: [
        {
          column: tag,
          comparison: tagCompare,
          value: valueCompare,
        },
        {
          column: tagSecond,
          comparison: tagCompareSecond,
          value: valueCompareSecond,
        },
      ],
    },
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
