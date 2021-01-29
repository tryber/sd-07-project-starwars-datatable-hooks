import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import imagePlanet from '../image/imperio.jpg';
import context from '../contextAPI/Context';
import useEvent from '../hooks/index';

function Dashboard() {
  const {
    onHandleChange,
    onHandlecolumn,
    onHandleComparison,
    onHandleNumber,
    filters,
  } = useContext(context);

  const [setGetEvent] = useEvent();

  const removeFild = filters.filterByNumericValues.map(({ column }) => column);
  console.log(removeFild);
  return (
    <section className="settings">
      <input
        className="name-search"
        type="text"
        color="secondary"
        data-testid="name-filter"
        name="name"
        onChange={ onHandleChange }
      />
      <div className="select-setting">
        <select
          name="column"
          className="left-select"
          data-testid="column-filter"
          onChange={ onHandlecolumn }
        >
          {
            removeFild.includes('population') ? null
              : <option value="population">population</option>
          }
          {
            removeFild.includes('orbital_period') ? null
              : <option value="orbital_period">orbital_period</option>
          }
          {
            removeFild.includes('diameter') ? null
              : <option value="diameter">diameter</option>
          }
          {
            removeFild.includes('rotation_period') ? null
              : <option value="rotation_period">rotation_period</option>
          }
          {
            removeFild.includes('surface_water') ? null
              : <option value="surface_water">surface_water</option>
          }
        </select>

        <select
          name="comparison"
          className="right-select"
          data-testid="comparison-filter"
          onChange={ onHandleComparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </div>
      <div className="sub-settings">
        <input
          className="input-filter"
          name="value"
          type="number"
          color="primary"
          data-testid="value-filter"
          onChange={ onHandleNumber }
        />
        <Button
          className="button-fetch"
          variant="contained"
          color="primary"
          data-testid="button-filter"
          onClick={ () => setGetEvent(Math.random()) }
        >
          Buscar
        </Button>
      </div>
      <img className="planet" src={ imagePlanet } alt="planet" />
    </section>
  );
}

export default Dashboard;
