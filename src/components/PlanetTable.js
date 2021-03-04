import React, { useContext } from 'react';
import { PlanetContext } from '../contexts/PlanetContext';
import PlanetRow from './PlanetRow';

const PlanetsTable = () => {
  const { planets } = useContext(PlanetContext);
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
    <table className="table">
      <thead>
        <tr>
          {headers.map((header) => (<th key={ header }>{header}</th>))}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => <PlanetRow key={ planet.name } planet={ planet } />)}
      </tbody>
    </table>
  ) : (
    <p>Loading...</p>
  );
};

export default PlanetsTable;
