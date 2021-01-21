import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, handleInput } = useContext(StarWarsContext);
  return (
    <div>
      <header>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleInput }
        />
        <select data-testid="column-filter">
          {
            data.map((planet) => (
              <option key={ planet.name }>{ planet.population }</option>
            ))
          }
        </select>
      </header>
      <table>
        <thead>
          <tr>
            <th>Planet</th>
            <th>Rotation period</th>
            <th>orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface_water</th>
            <th>created</th>
            <th>edited</th>
            <th>films</th>
            <th>url</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          { data.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>);
}

export default Table;

/*
function ProductTable(props) {
  const { products } = props;
  return (
    <table>
      <caption>Our products</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>In Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
} */
