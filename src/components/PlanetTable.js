import React, { useContext, useEffect, useState } from 'react';
import { PlanetContext } from '../contexts/PlanetContext';
import PlanetRow from './PlanetRow';

const PlanetsTable = () => {
  const { planets } = useContext(PlanetContext);
  const [nameFilter, setNameFilter] = useState('');
  const [filtersState, setFiltersState] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  useEffect(() => {
    setFiltersState({
      ...filtersState,
      filters: { filterByName: { name: nameFilter } },
    });
  }, [nameFilter]);

  const headers = [
    'name',
    'rotation period',
    'orbital period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  return planets ? (
  <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="planet name filter"
        value={ nameFilter }
        onChange={ (e) => setNameFilter(e.target.value) }
      />
      <table className="table">
        <thead>
          <tr>
            {headers.map((header) => (<th key={ header }>{header}</th>))}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => {
            const lowerCasedPlanetName = planet.name.toLowerCase();
            const lowerCasedNameFilter = filtersState
              .filters.filterByName.name.toLowerCase();
            return (lowerCasedPlanetName.match(lowerCasedNameFilter))
              && <PlanetRow key={ planet.name } planet={ planet } />;
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default PlanetsTable;
