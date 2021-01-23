import React, { useContext } from 'react';
import '../App.css';
import StarWarsContext from '../context/StarWarsContext';

const TablePlanet = () => {
  const { starWars, filters } = useContext(StarWarsContext);
  // função feita com ajuda de Murilo Wolf dentro do plantão
  function tableTitles() {
    if (starWars[0]) {
      delete starWars[0].residents;
      return Object.keys(starWars[0])
        .map((item) => <th key={ item }>{item}</th>);
    }
  }

  function tableBody() {
    const filterResults = starWars.filter(({ name }) => name.toLowerCase()
      .includes(filters.filterByName.name.toLowerCase()));
    if (filters.filterByName.name === undefined) {
      return starWars.map((item) => (
        <tr key={ item.name }>
          <td key={ item.name }>{item.name}</td>
          <td key={ item.rotation_period }>{item.rotation_period}</td>
          <td key={ item.orbital_period }>{item.orbital_period}</td>
          <td key={ item.diameter }>{item.diameter}</td>
          <td key={ item.climate }>{item.climate}</td>
          <td key={ item.gravity }>{item.gravity}</td>
          <td key={ item.terrain }>{item.terrain}</td>
          <td key={ item.surface_water }>{item.surface_water}</td>
          <td key={ item.population }>{item.population}</td>
          <td key={ item.films }>{item.films}</td>
          <td key={ item.created }>{item.created}</td>
          <td key={ item.edited }>{item.edited}</td>
          <td key={ item.url }>{item.url}</td>
        </tr>
      ));
    }
    return filterResults.map((item) => (
      <tr key={ item.name }>
        <td key={ item.name }>{item.name}</td>
        <td key={ item.rotation_period }>{item.rotation_period}</td>
        <td key={ item.orbital_period }>{item.orbital_period}</td>
        <td key={ item.diameter }>{item.diameter}</td>
        <td key={ item.climate }>{item.climate}</td>
        <td key={ item.gravity }>{item.gravity}</td>
        <td key={ item.terrain }>{item.terrain}</td>
        <td key={ item.surface_water }>{item.surface_water}</td>
        <td key={ item.population }>{item.population}</td>
        <td key={ item.films }>{item.films}</td>
        <td key={ item.created }>{item.created}</td>
        <td key={ item.edited }>{item.edited}</td>
        <td key={ item.url }>{item.url}</td>
      </tr>
    ));
  }

  return (
    <table>
      <tr>
        {tableTitles()}
      </tr>
      <tbody>
        {tableBody()}
      </tbody>
    </table>
  );
};

export default TablePlanet;
