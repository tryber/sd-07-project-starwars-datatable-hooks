import React, { useContext } from 'react';

import { Provider, StarWarsContext } from './context/Provider';
import './App.css';

function App() {
  const { data } = useContext(StarWarsContext);

  return (
    <Provider>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => (
            <tr key={ planet }>
              {Object.keys(planet).map((key) => {
                if (key === 'residents') return null;
                return (
                  <td key={ key }>{planet[key]}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </Provider>
  );
}

export default App;
