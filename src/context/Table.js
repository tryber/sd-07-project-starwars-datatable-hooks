import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  // if (data === undefined || data === []) return (<p>Loading...</p>);

  // const tableHeader = () => {
  //   <table>
  //     <thead>
  //       <tr>
  //         {Object.keys(data[0]).map((header) => (<th key={ header }>{ header }</th>)}
  //       </tr>
  //     </thead>
  //   </table>
  // }

  const thHeader = (property) => {
    const ZERO = 0;
    for (let i = ZERO; i <= property.length; i += 1) {
      if (property !== 'residents') return (<th key={ property }>{ property }</th>);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {
            data ? Object.keys(data[0]).map(thHeader) : (<th>Loading...</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          data ? data.map((body) => (
            <tr key={ body.name }>
              <td>{ body.name }</td>
              <td>{ body.rotation_period }</td>
              <td>{ body.orbital_period }</td>
              <td>{ body.diameter }</td>
              <td>{ body.climate }</td>
              <td>{ body.gravity }</td>
              <td>{ body.terrain }</td>
              <td>{ body.surface_water }</td>
              <td>{ body.population }</td>
              <td>{ body.films }</td>
              <td>{ body.created }</td>
              <td>{ body.edited }</td>
              <td>{ body.url }</td>
            </tr>
          ))
            : <tr><th>Loading...</th></tr>
        }
      </tbody>
    </table>
  );
}

export default Table;
