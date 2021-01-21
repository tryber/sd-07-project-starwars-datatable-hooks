import React from 'react'
import StarWarsContext from '../context/StarWarsContext';

function Table() {

  const renderTableHeader = () => {
    const header = [
      'climate',
      'created',
      'diameter',
      'edited',
      'films',
      'gravity',
      'name',
      'orbital_period',
      'population',
      'rotation_period',
      'surface_water',
      'terrain',
      'url',
    ]
    return header.map((key, index) => <th key={ index }>{key}</th>);
  }

  return (
    <StarWarsContext.Consumer>
    {
      value => (
        <div>
          <h1>Tabela</h1>
          <table>
            <tbody>
              <tr>{renderTableHeader()}</tr>
              { value.data.map((planet) => {
                return <tr key={planet.name}>
                  <td>{planet.climate}</td>
                  <td>{planet.created}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.films}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.name}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.population}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.water}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.url}</td>
                </tr>
              }) }
            </tbody>
          </table>
          {/* { value.data.map((item) => (<li key={ item.name }>{ item.name }</li>)) } */}
        </div>
      )
    }
    </StarWarsContext.Consumer>
  )
}

export default Table;
