import React, { useContext } from 'react';
import StartWarsContext from '../context/StarWarsContext';

export default function TableHeader() {
  const { planetsProvider } = useContext(StartWarsContext);
  console.log(planetsProvider);
  return (
    <thead>
      <tr>
        {
          Object.keys(planetsProvider[0]).map((key) => (
            <th>{key}</th>
          ))
        }
      </tr>
    </thead>
  );
}
