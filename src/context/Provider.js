import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(url);
      const response = await request.json();
      delete response.results.residents;
      setData(response.results);
    };
    fetchData();
  }, []);

  const [name, setFilterText] = useState('');
  const [newNameData, setNewNameData] = useState([]);

  useEffect(() => {
    setNewNameData(data.filter((value) => value.name.includes(name)));
  }, [name, data]); // referência Carol Andrade

  const contextValue = {
    data,
    setFilterText,
    newNameData,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
