import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/starWarsApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataSave, setDataSave] = useState([]);
  const [filterName, setFilterName] = useState('');

  const handleChange = () => {
    const negNumber = -1;
    const input = document.querySelector('#name-filter').value;
    setFilterName(input);
    const searchData = dataSave.filter((item) => item.name.indexOf(input) > negNumber);
    setData(searchData);
  };

  const contextValue = {
    handleChange,
    setFilterName,
    setData,
    setDataSave,
    data,
    dataSave,
    filters: {
      filterByName: {
        name: filterName,
      },
    },
  };

  useEffect(() => {
    async function fetchData() {
      const results = await fetchApi();
      setData(results);
      setDataSave(results);
    }
    fetchData();
  }, []);

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
