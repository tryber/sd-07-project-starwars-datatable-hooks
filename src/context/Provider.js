import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataSave, setDataSave] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const handleChangeName = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const contextValue = {
    handleChangeName,
    setData,
    setDataSave,
    setFilters,
    dataSave,
    data,
    filters,
  };

  useEffect(() => {
    const negNumber = -1;
    setData(dataSave
      .filter((item) => item.name.indexOf(filters.filterByName.name) > negNumber));
  }, [dataSave, filters.filterByName]);

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
