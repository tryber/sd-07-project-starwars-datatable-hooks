import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterBtn, setFilterBtn] = useState(false);
  const [filters, setFilters] = useState(
    { filterByName: { name: '' },
      filterByNumericValues: [
        { column: 'population', comparasion: 'maior que', value: '100000' },
      ],
    },
  );

  useEffect(() => {
    async function fetchApi() {
      const endpoint = await fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json');
      const objct = await endpoint.json();

      setData(objct.results);
    }
    fetchApi();
  }, []);

  const filterByName = (name) => setFilters({ ...filters, filterByName: { name } });
  const filterByNum = (ob) => setFilters({ ...filters, filterByNumericValues: [ob] });

  const provObjct = { data, filters, filterByName, filterByNum, filterBtn, setFilterBtn };
  return (
    <StarWarsContext.Provider value={ provObjct }>
      { children }
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
