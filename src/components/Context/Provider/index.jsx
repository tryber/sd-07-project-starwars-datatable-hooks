import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../../../service/contextAPI';
import StarWarsContext from '../StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    const dataAPI = async () => {
      const { results } = await getPlanets();
      setData(results);
    };
    dataAPI();
  }, []);

  const handleFilterPlanets = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  // useEffect(() => {
  //   planetListName(
  //     [...planetList].filter((planet) => planet.name
  //       .toLowerCase().includes(filters.filterByName.name
  //         .toLowerCase())),
  //   );
  // }, [filters.filterByName.name, planetList]);

  const context = {
    data,
    filters,
    handleFilterPlanets,
    search,
    setSearch,
    // handleSearchNamePlanet,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
