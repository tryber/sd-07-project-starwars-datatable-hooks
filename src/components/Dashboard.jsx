import React from 'react';
import { Input, Button, Select } from '@material-ui/core';
import imagePlanet from '../image/imperio.jpg';

function Dashboard() {
  return (
    <section className="settings">
      <div className="sub-settings">
        <Input type="string" color="primary" />
        <Button variant="contained" color="primary">Buscar</Button>
      </div>
      <Input type="string" color="secondary" />
      <div className="select-setting">
        <Select className="left-select">
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </Select>

        <Select className="right-select">
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </Select>
      </div>
      <img className="planet" src={ imagePlanet } alt="planet" />
    </section>
  );
}

export default Dashboard;
