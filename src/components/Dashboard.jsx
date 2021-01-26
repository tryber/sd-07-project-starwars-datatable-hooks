import React, { useContext } from 'react';
import { Input, Button, Select } from '@material-ui/core';
import imagePlanet from '../image/imperio.jpg';
import context from '../contextAPI/Context';

function Dashboard() {
  const { onHandleChange, onHandleChangeSelect } = useContext(context);
  return (
    <section className="settings">
      <div className="sub-settings">
        <Input
          className="input-filter"
          type="number"
          color="primary"
          data-testid="value-filter"
          onChange={ onHandleChangeSelect }
        />
        <Button
          className="button-fetch"
          variant="contained"
          color="primary"
          data-testid="button-filter"
        >
          Buscar
        </Button>
      </div>
      <input
        type="text"
        color="secondary"
        data-testid="name-filter"
        name="string"
        onChange={ onHandleChange }
      />
      <div className="select-setting">
        <Select
          name="comparison"
          defaultValue=""
          className="right-select"
          data-testid="comparison-filter"
          onChange={ onHandleChangeSelect }
        >
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option selected value="igual a">Igual a</option>
        </Select>
        <Select
          name="column"
          defaultValue=""
          className="left-select"
          data-testid="column-filter"
          onChange={ onHandleChangeSelect }
        >
          <option value="population">Population</option>
          <option value="orbital_period">Orbital_period</option>
          <option selected value="diameter">Diameter</option>
          <option value="rotation_period">Rotation_period</option>
          <option value="surface_water">Surface_water</option>
        </Select>
      </div>
      <img className="planet" src={ imagePlanet } alt="planet" />
    </section>
  );
}

export default Dashboard;
