import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const contextValue = useContext(StarWarsContext);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const { data: { results } } = contextValue;
    if (results) {
      const getHeaders = Object.keys(results[1])
        .filter((header) => header !== 'residents');
      setHeaders(getHeaders);
    }
  }, [contextValue]);

  return (
    <table>
      {contextValue.isFetching && 'loading...'}
      <tr>
        {headers.map((header) => <th key={ header }>{ header }</th>)}
      </tr>
      {contextValue.data.results && contextValue.data.results.map((object, index) => {
        const {
          name,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          films,
          created,
          edited,
          url,
        } = object;

        return (
          <tr key={ `line${index}` }>
            <td key={ `name${index}` }>{ name }</td>
            <td key={ `rotation_period${index}` }>{ rotationPeriod }</td>
            <td key={ `orbital_period${index}` }>{ orbitalPeriod }</td>
            <td key={ `diameter${index}` }>{ diameter }</td>
            <td key={ `climate${index}` }>{ climate }</td>
            <td key={ `gravity${index}` }>{ gravity }</td>
            <td key={ `tarrain${index}` }>{ terrain }</td>
            <td key={ `surface_water${index}` }>{ surfaceWater }</td>
            <td key={ `population${index}` }>{ population }</td>
            <td key={ `films${index}` }>{ films }</td>
            <td key={ `created${index}` }>{ created }</td>
            <td key={ `edited${index}` }>{ edited }</td>
            <td key={ `url${index}` }>{ url }</td>
          </tr>
        );
      })}
    </table>
  );
}

export default Table;
