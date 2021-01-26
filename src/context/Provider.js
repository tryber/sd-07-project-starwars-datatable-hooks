import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/starWarsApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataSave, setDataSave] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterColumn, setFilterColumn] = useState('');

  const handleChangeFilterName = ({ target: { value } }) => {
    setFilterName(value);
  };

  const handleChangeColumnFilter = ({ target: { value } }) => {
    setFilterColumn(value);
  };

  const handleChangeComparisonFilter = ({ target: { value } }) => {
    setFilterColumn(value);
  };

  const contextValue = {
    handleChangeColumnFilter,
    handleChangeFilterName,
    handleChangeComparisonFilter,
    data,
    filters: {
      filterByName: {
        name: filterName,
      },
      filterByNumericValues: [
        {
          column: filterColumn,
          comparison: '',
          value: '',
        },
      ],
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

  useEffect(() => {
    const negNumber = -1;
    setData(dataSave.filter((item) => item.name.indexOf(filterName) > negNumber));
  }, [dataSave, filterName]);

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
