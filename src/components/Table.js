import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Load from './Loading/Loading';

const Table = () => {
  const globalState = useContext(StarWarsContext);
  const { loading } = globalState;
  return (
    <div>
      {loading ? (
        <Load />
      ) : (
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climte</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Criated</th>
              <th>Edited</th>
              <th>Url</th>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
