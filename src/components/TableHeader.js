import React, { useContext } from 'react';
import StartWarsContext from '../context/StarWarsContext';

export default function TableHeader() {
  const { planetsProvider } = useContext(StartWarsContext);
  const headerInfo = Object.keys(planetsProvider[0]);
  return (
    <thead>
      <tr>
        {
          headerInfo.map((key) => (
            <th key={ key }>{key}</th>
          ))
        }
      </tr>
    </thead>
  );
}
