import React, { useContext } from 'react';
import StartWarsContext from '../context/StarWarsContext';

export default function TableBody() {
  const { planetsProvider, filteredName } = useContext(StartWarsContext);
  console.log(filteredName);
  const getNull = 0;
  const renderByName = () => {
    if (filteredName.length > getNull) {
      return filteredName;
    }
    return planetsProvider;
  };

  return (
    <tbody>
      {
        renderByName().map((planetData) => (
          <tr key={ planetData.name }>
            <td>{planetData.name}</td>
            <td>{planetData.rotation_period}</td>
            <td>{planetData.orbital_period}</td>
            <td>{planetData.diameter}</td>
            <td>{planetData.climate}</td>
            <td>{planetData.gravity}</td>
            <td>{planetData.terrain}</td>
            <td>{planetData.surface_water}</td>
            <td>{planetData.population}</td>
            <td>{planetData.films}</td>
            <td>{planetData.created}</td>
            <td>{planetData.edited}</td>
            <td>{planetData.url}</td>
          </tr>
        ))
      }
    </tbody>
  );
}
