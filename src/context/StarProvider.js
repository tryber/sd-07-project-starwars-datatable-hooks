import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useData from '../hooks/useData';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setDataUrl, setData] = useData();
  const [dataApi, setDataApi] = useState('Loading');
  const [filter, setFilter] = useState({
    filters: { filterByName: { name: '' }, filterByNumericValues: [] },
  });
  const [selectCount, setSelectCount] = useState(1);
  const [filters, setFilters] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [revertFilter, setRevert] = useState([]);

  useEffect(() => {
    setDataUrl('https://swapi-trybe.herokuapp.com/api/planets/');
  });

  useEffect(() => {
    if (data !== 'Loading') {
      setDataApi({
        results: data.results.filter(({ name }) => name
          .toLowerCase()
          .includes(filter.filters.filterByName.name.toLowerCase())),
      });
    }
  }, [filter, data, setData]);

  const contextValue = {
    filter,
    setFilter,
    dataApi,
    setData,
    data,
    selectCount,
    setSelectCount,
    filters,
    setFilters,
    setDataUrl,
    revertFilter,
    setRevert,
  };
  return (
    <main>
      <StarWarsContext.Provider value={ contextValue }>
        {children}
      </StarWarsContext.Provider>
    </main>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Provider;
