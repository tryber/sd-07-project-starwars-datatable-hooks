import React, { useContext } from 'react';
import StartWarsContext from '../context/StarWarsContext';

export default function TableHeader() {
  const { initialData } = useContext(StartWarsContext);

  const headerInfo = Object.keys(initialData[0]);
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
