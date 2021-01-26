import React, { useContext } from 'react';
import { Input, Button, Select } from '@material-ui/core';
import imagePlanet from '../image/imperio.jpg';
import context from '../contextAPI/Context';

function Dashboard() {
  const { onHandleChange } = useContext(context);
  return (
    <section className="settings">
      <div className="sub-settings">
        <Input
          className="input-filter"
          type="number"
          color="primary"
          name="filterByNumericValues"
          data-testid="value-filter"
          onChange={ (event) => onHandleChange(event) }
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
      <Input
        type="string"
        color="secondary"
        name="filterByName"
        data-testid="name-filter"
        onChange={ (event) => onHandleChange(event) }
      />
      <div className="select-setting">
        <Select defaultValue="" className="right-select" data-testid="comparison-filter">
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option selected value="igual a">Igual a</option>
        </Select>
        <Select defaultValue="" className="left-select" data-testid="column-filter">
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
