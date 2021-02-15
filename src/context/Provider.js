import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

// import api from '../services/api';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterResults, setFilterResults] = useState([]);

  useEffect(() => {
    const api = async () => {
      const apiUrl = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const url = await apiUrl.json();
      setData(url.results);
      setFilterResults(url.results);
    };
    api();
  }, []);
  // codigo Eric vini
  useEffect(() => {
    const filterInput = data.filter(({ name }) => name.includes(filterName));
    setFilterResults(filterInput);
  }, [data, filterName]);

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        filterName,
        setFilterName,
        filterResults,
        setFilterResults,
      } }
    >
      { children }
    </StarWarsContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
