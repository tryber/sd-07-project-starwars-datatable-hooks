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
    onGetEvent,
    disable1,
    disable2,
    disable3,
    disable4,
    disable5 } = useContext(context);
  const [setGetEvent] = useEvent();
  const { disabled1 } = disable1;
  const { disabled2 } = disable2;
  const { disabled3 } = disable3;
  const { disabled4 } = disable4;
  const { disabled5 } = disable5;

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
          onClick={ (event) => onGetEvent(event) }
        >
          <option disabled={ disabled1 } value="population">population</option>
          <option disabled={ disabled2 } value="orbital_period">orbital_period</option>
          <option disabled={ disabled3 } value="diameter">diameter</option>
          <option disabled={ disabled4 } value="rotation_period">rotation_period</option>
          <option disabled={ disabled5 } value="surface_water">surface_water</option>
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
