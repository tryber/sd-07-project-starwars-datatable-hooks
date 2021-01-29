import { useState, useEfffect, useContext } from 'react';
import React from 'react';
import StarWarsContext from '../context/starWarsContext';

function PlanetTable() {
  const { filterPlanets } = useContext(StarWarsContext);
  console.log(filterPlanets);
  return (
    <div>
      <p>Planetas</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
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
          {filterPlanets.map((filterPlanets) => (
            <tr key={filterPlanets.name}>
              <td >{filterPlanets.name}</td>
              <td >{filterPlanets.rotation_period}</td>
              <td >{filterPlanets.orbital_period}</td>
              <td >{filterPlanets.diameter}</td>
              <td >{filterPlanets.climate}</td>
              <td >{filterPlanets.gravity}</td>
              <td >{filterPlanets.terrain}</td>
              <td >{filterPlanets.surface_water}</td>
              <td >{filterPlanets.population}</td>
              <td >{filterPlanets.films}</td>
              <td >{filterPlanets.created}</td>
              <td >{filterPlanets.edited}</td>
              <td >{filterPlanets.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlanetTable;
