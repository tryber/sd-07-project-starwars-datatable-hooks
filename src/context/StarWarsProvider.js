import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [number, setNumber] = useState('');
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [availableColumns, setAvailableColumns] = useState(columns);

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(url).then((response) => response.json());
      setData(results);
      setFilters(results);
    }
    fetchData();
  }, []);

  const filteredPlanetsByName = (value) => {
    let planetFiltred = null;

    if (value !== '') {
      planetFiltred = data.filter((planet) => planet.name.includes(value));
      setFilters(planetFiltred);
    } else {
      setFilters(data);
    }
  };

  const handleName = ({ target }) => {
    const { value } = target;
    filteredPlanetsByName(value);
  };
  const handleForm = ({ target }) => {
    const { name, value } = target;
    if (name === 'column') {
      setColumn(value);
    } else if (name === 'comparison') {
      setComparison(value);
    } else if (name === 'number') {
      setNumber(value);
    } else {
      console.log('nada');
    }
  };

  const filterOptions = () => {
    setColumns();
    let planetFiltred = null;
    let optionsColumns = null;

    if (column !== '' && comparison !== '' && number !== '') {
      switch (column) {
      case 'population':
        if (comparison === 'menor que') {
          planetFiltred = data.filter(
            (planet) => planet.population < Number(number),
          );
        }
        if (comparison === 'maior que') {
          planetFiltred = data.filter(
            (planet) => planet.population > Number(number),
          );
        }
        if (comparison === 'igual a') {
          planetFiltred = data.filter(
            (planet) => planet.population === number,
          );
        }

        setFilters(planetFiltred);
        optionsColumns = columns.filter(
          (option) => option !== 'population',
        );
        setAvailableColumns(optionsColumns);
        break;

      case 'orbital_period':
        if (comparison === 'menor que') {
          planetFiltred = data.filter(
            (planet) => planet.orbital_period < Number(number),
          );
        }
        if (comparison === 'maior que') {
          planetFiltred = data.filter(
            (planet) => planet.orbital_period > Number(number),
          );
        }
        if (comparison === 'igual a') {
          planetFiltred = data.filter(
            (planet) => planet.orbital_period === number,
          );
        }
        setFilters(planetFiltred);

        optionsColumns = columns.filter(
          (option) => option !== 'porbital_period',
        );
        setAvailableColumns(optionsColumns);

        break;

      case 'diameter':
        if (comparison === 'menor que') {
          planetFiltred = data.filter(
            (planet) => planet.diameter < Number(number),
          );
        }
        if (comparison === 'maior que') {
          planetFiltred = data.filter(
            (planet) => planet.diameter > Number(number),
          );
        }
        if (comparison === 'igual a') {
          planetFiltred = data.filter((planet) => planet.diameter === number);
        }
        setFilters(planetFiltred);
        optionsColumns = columns.filter(
          (option) => option !== 'diameter',
        );
        setAvailableColumns(optionsColumns);
        break;

      case 'rotation_period':
        if (comparison === 'menor que') {
          planetFiltred = data.filter(
            (planet) => planet.rotation_period < Number(number),
          );
        }
        if (comparison === 'maior que') {
          planetFiltred = data.filter(
            (planet) => planet.rotation_period > Number(number),
          );
        }
        if (comparison === 'igual a') {
          planetFiltred = data.filter(
            (planet) => planet.rotation_period === number,
          );
        }
        setFilters(planetFiltred);
        optionsColumns = columns.filter(
          (option) => option !== 'rotation_period',
        );
        setAvailableColumns(optionsColumns);
        break;

      case 'surface_water':
        if (comparison === 'menor que') {
          planetFiltred = data.filter(
            (planet) => planet.surface_water < Number(number),
          );
        }
        if (comparison === 'maior que') {
          planetFiltred = data.filter(
            (planet) => planet.surface_water > Number(number),
          );
        }
        if (comparison === 'igual a') {
          planetFiltred = data.filter(
            (planet) => planet.surface_water === number,
          );
        }
        setFilters(planetFiltred);
        optionsColumns = columns.filter(
          (option) => option !== 'surface_water',
        );
        setAvailableColumns(optionsColumns);
        break;

      default:
        console.log('Opção Invalida');
      }
    }
  };

  return (
    <StarWarsContext.Provider
      value={ { filters, availableColumns, handleName, handleForm, filterOptions } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
