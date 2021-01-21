import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const [originals, setOriginals] = useState([]);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const results = await response.json();
      setData(results.results);
      setFilters(results.results);
      setOriginals(results.results);
    };
    fetchData();
  }, [filters]);

  const searchTable = (value) => {
    const filteredData = [];
    const numberMagic = 0;

    if (value.length === numberMagic) {
      return originals;
    }
    for (let i = numberMagic; i < filters.length; i += 1) {
      const newValue = value.toLowerCase();
      const planet = filters[i].name.toLowerCase();
      if (planet.includes(newValue)) {
        filteredData.push(filters[i]);
      }
    }

    return filteredData;
  };

  const handleInput = (event) => {
    setData(searchTable(event.target.value));
  };

  const context = { data, handleInput };
  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.instanceOf(Object),
}.isRequired;

export default Provider;
