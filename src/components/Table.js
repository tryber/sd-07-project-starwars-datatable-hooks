import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const { data, novo } = useContext(StarWarsContext);
  return (
    <table>
      <thead>
        <tr>
          {data ? (
            Object.keys(data[0])
              .filter((key) => key !== 'residents')
              .map((itens) => (
                <th key={ itens }>
                  (
                  {itens
                    .replace('_', ' ')
                    .replace(itens[0][0], itens[0][0].toUpperCase())}
                  )
                </th>
              ))
          ) : (
            <p>tá carregando</p>
          )}
        </tr>
      </thead>
      <tbody>
        {novo && novo.map((planeta, index) => (
          <tr key={ index }>
            {Object.entries(planeta).map(([key, value]) => {
              if (key === 'residents') {
                return undefined;
              }
              return (
                <td key={ key }>{value}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
