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
  } = useContext(context);

  const [setGetEvent] = useEvent();

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
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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
