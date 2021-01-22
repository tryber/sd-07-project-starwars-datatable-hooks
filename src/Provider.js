import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StarWarsContext from './context/StarWarsContext';
import getCurrencePlanets from './services/planetsApi';

function Provider({ children }) {
  const [filterName, setFilterByName] = useState('');
  const [data, setData] = useState([]);
  const [tagCompare, setTagCompare] = useState('igual');
  const [tag, setTag] = useState('rotation_period');
  const [valueCompare, setValueCompare] = useState('');
  const [filter, setFilter] = useState(false);
  const dataTags = data[0] || [];
  useEffect(() => {
    getCurrencePlanets()
      .then((response) => setData(response.results));
  }, []);

  const myContext = {
    data,
    filter,
    dataHeader: Object.keys(dataTags).filter(
      (item) => item !== 'residents',
    ),
    setFilterByName,
    setTagCompare,
    setTag,
    setValueCompare,
    setFilter,
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
