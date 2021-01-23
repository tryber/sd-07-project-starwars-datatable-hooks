import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planets, setFilters, listNamesfilters } = useContext(StarWarsContext);
  const keyOne = planets[0];
  const filterPlanets = ({ target }) => {
    const planetName = target.value;
    console.log(planetName);
    setFilters(
      {
        filterByName: {
          name: planetName,
        },
      },
    );
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        placeholder="digite o nome do planeta"
        onChange={ filterPlanets }
      />
      <table>
        <thead>
          <tr>
            {Object.keys(keyOne).map((item) => (
              <th className="table-head" key={ item }>
                { item }
              </th>))}
          </tr>
        </thead>
        <tbody>
          {listNamesfilters.map((objectPlanets) => (
            <tr key="planetas">
              { Object.values(objectPlanets).map((chaves) => (
                <td
                  key={ chaves }
                >
                  { chaves }
                </td>)) }
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
