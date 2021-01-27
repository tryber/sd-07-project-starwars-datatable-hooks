import React, { useContext, useEffect, useState } from "react";
import { StarWarsContext } from "../providers/StarWarsProviders";

const Table = () => {
  const {
    data,
    filters: { filterByName }
  } = useContext(StarWarsContext);
  const [dataFiltered, setDataFiltered] = useState([data]);

  useEffect(() => {
    setDataFiltered(
      data.filter(({ name }) => name.includes(filterByName.name))
    );
  }, [data, filterByName.name]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Rotação</th>
            <th>Orbita</th>
            <th>Diametro</th>
            <th>Clima</th>
            <th>Gravidade</th>
            <th>Tipo de solo</th>
            <th>Água na superfice</th>
            <th>População</th>
            <th>Residente</th>
            <th>Filmes</th>
            <th>Criado</th>
            <th>Editado</th>
          </tr>
        </thead>
        <tbody>
          {dataFiltered.map((planet) => (
            <tr key={planet.name}>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.residents}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
