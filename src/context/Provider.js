import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StartWarsContext from './StarWarsContext';
import getPlanetsData from '../services';

function Provider({ children }) {
  const [isFetching, setIsFetching] = useState(true);
  const [planetsProvider, setPlanetsProvider] = useState([]);
  const [name, setNameSearchBar] = useState('');
  const [filteredName, setFilteredName] = useState([]);

  const filters = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  };

  // Faz a requisição:
  const fetchPlanets = async () => {
    const { results } = await getPlanetsData();
    const expected = results.filter((result) => delete result.residents);
    setPlanetsProvider(expected);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  // Atualiza o estado do nome a partir do filtro de busca:
  useEffect(() => {
    // console.log('teste', planetsProvider.filter((planetName) => {
    //   console.log('planet name', planetName.name);
    //   console.log('name', name);
    //   return planetName.name.toLowerCase().includes(name);
    // }));
    setFilteredName(
      [...planetsProvider]
        .filter((planetName) => planetName.name.toLowerCase()
          .includes(name)),
    );
  }, [name, planetsProvider]);

  const handleChanges = ({ target }) => {
    const { value } = target;
    setNameSearchBar(value);
  };

  // const useFilter = () => {
  //   if (planetsProvider !== []) {
  //     const planetsName = planetsProvider.map((planetData) => (
  //       planetData.name
  //     ))
  //     const filteredPlanet = planetsName.filter(planetName => {
  //       planetName.toLowerCase().includes();
  //     })
  //     console.log(filteredPlanet);
  //     return filteredPlanet;
  //   }
  // }

  const context = {
    filters,
    isFetching,
    planetsProvider,
    filteredName,
    handleChanges,
    // useFilter,
  };

  return (
    <StartWarsContext.Provider value={ context }>
      {children}
    </StartWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
