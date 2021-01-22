import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import fetchPlanets from '../services';

function Table() {
  const { planets, setPlanets } = useContext(PlanetsContext);
  const headers = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];
  useEffect(() => {
    fetchPlanets(setPlanets);
  }, [setPlanets]);
  return (
    <div>
      {planets.results
        ? (
          <table>
            <tr>
              {headers.map((header) => <th key={ header }>{ header }</th>)}
            </tr>
            {planets.results.map((result) => (
              <tr key={ result.name }>
                <td key={ result.name }>{ result.name }</td>
                <td key={ result.rotation_period }>{ result.rotation_period }</td>
                <td key={ result.orbital_period }>{ result.orbital_period }</td>
                <td key={ result.diameter }>{ result.diameter }</td>
                <td key={ result.climate }>{ result.climate }</td>
                <td key={ result.gravity }>{ result.gravity }</td>
                <td key={ result.terrain }>{ result.terrain }</td>
                <td key={ result.surface_water }>{ result.surface_water }</td>
                <td key={ result.population }>{ result.population }</td>
                <td key={ result.films }>{ result.films }</td>
                <td key={ result.created }>{ result.created }</td>
                <td key={ result.edited }>{ result.edited }</td>
                <td key={ result.url }>{ result.url }</td>
              </tr>
            ))}
          </table>
        )
        : 'Loading...' }
    </div>
  );
}

export default Table;
