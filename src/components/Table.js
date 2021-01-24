import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  return (<table>

    <thead>
      <tr>
        <th/>
      </tr>
    </thead>
  </table>);
}
