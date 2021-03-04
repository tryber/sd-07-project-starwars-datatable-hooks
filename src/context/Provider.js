import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext.js';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataApi, setDataApi] = useState([]);

  // Filtros Salvos
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    }
  });

// Filtro direto a partir do nome
  function filterName(results) {
    const { name } = filters.filterByName;
    return results.filter(
      (result) => result.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      || name === '',
    );
  }
// useEffect para manipualação do estados sem sobreescrever
  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(
        'https://swapi.dev/api/planets/',
      ).then((response) => response.json());
      results.map((planet) => delete planet.residents);
      setDataApi(results);
      setData(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const results = dataApi;
    const filteredName = filterName(results);
  }, [filters]);

  const context = {
    data,
    setData,
    filters,
    setFilters,
  };
// Relação indireta
  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
