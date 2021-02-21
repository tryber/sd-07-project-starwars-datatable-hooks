import React, { useContext, useState } from 'react';
import { Form, FormCheck, Button, Card } from 'react-bootstrap';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsForm() {
  const [columnValues] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [orderColumn, setOrderColumn] = useState('name');
  const [orderSort, setOrderSort] = useState('ASC');
  const {
    inputFilter,
    setColumn,
    setComparison,
    setValue,
    buttonFilter,
    filters,
    setFilters,
    keysFiltered,
  } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const filterColumn = () => {
    buttonFilter();
  };

  const deleteFilter = (deletedColumn) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.filter(
        ({ column }) => column !== deletedColumn,
      ),
    });
  };

  const orderFilter = () => {
    setFilters({
      ...filters,
      order: { column: orderColumn, sort: orderSort },
    });
  };

  const zero = 0;
  return (
    <div>
      <Form>
        <Form.Label htmlFor="name-filter">
          Filtrar por nome
          <Form.Control
            size="sm"
            type="text"
            id="name-filter"
            data-testid="name-filter"
            onChange={ (event) => inputFilter(event.target.value) }
          />
        </Form.Label>
        <br />
        <Form.Label htmlFor="column-filter">
          Selecione sua coluna
          <Form.Control
            as="select"
            size="sm"
            name="column-filter"
            id="column-filter"
            data-testid="column-filter"
            onChange={ (event) => setColumn(event.target.value) }
          >
            {columnValues
              .filter(
                (col) => !filterByNumericValues.some(
                  (filterObj) => col === filterObj.column,
                ),
              )
              .map((columnValue) => (
                <option key={ columnValue } value={ columnValue }>
                  {columnValue}
                </option>
              ))}
          </Form.Control>
        </Form.Label>
        <Form.Label htmlFor="value-range">
          Faixa de Valor
          <Form.Control
            as="select"
            size="sm"
            name="value-range"
            id="value-range"
            data-testid="comparison-filter"
            onChange={ (event) => setComparison(event.target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </Form.Control>
        </Form.Label>
        <Form.Label htmlFor="value-filter">
          Valor
          <Form.Control
            size="sm"
            id="value-filter"
            data-testid="value-filter"
            type="number"
            onChange={ (event) => setValue(event.target.value) }
          />
        </Form.Label>
        <Button
          type="button"
          data-testid="button-filter"
          onClick={ () => filterColumn() }
        >
          Filtrar
        </Button>
        <br />
        <Form.Label htmlFor="collumn">
          Ordernar por coluna
          <Form.Control
            as="select"
            size="sm"
            name="column-sort"
            id="column-sort"
            data-testid="column-sort"
            onChange={ (event) => setOrderColumn(event.target.value) }
          >
            {keysFiltered.map((columnValue) => (
              <option key={ columnValue } value={ columnValue }>
                {columnValue}
              </option>
            ))}
          </Form.Control>
        </Form.Label>
        <FormCheck.Label htmlFor="radio-asc">
          Ascendente
          <Form.Check
            name="order"
            type="radio"
            id="radio-asc"
            checked={ orderSort === 'ASC' }
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ (event) => setOrderSort(event.target.value) }
          />
        </FormCheck.Label>
        <FormCheck.Label htmlFor="radio-dsc">
          Descendente
          <Form.Check
            name="order"
            type="radio"
            id="radio-dsc"
            checked={ orderSort === 'DESC' }
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ (event) => setOrderSort(event.target.value) }
          />
        </FormCheck.Label>
        <Button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => orderFilter() }
        >
          Ordernar
        </Button>
      </Form>
      {filterByNumericValues.length > zero
        && filterByNumericValues.map((element, index) => (
          <Card
            bg="light"
            key={ element }
            data-testid="filter"
            style={ { width: '10rem' } }
          >
            <Card.Header>{`Filtro ${index + 1}`}</Card.Header>
            <Card.Body>
              <Card.Text>{element.column}</Card.Text>
              <Card.Text>{element.comparison}</Card.Text>
              <Card.Text>{element.value}</Card.Text>
            </Card.Body>
            <Button
              variant="danger"
              type="button"
              onClick={ () => deleteFilter(element.column) }
            >
              X
            </Button>
          </Card>
        ))}
    </div>
  );
}

export default PlanetsForm;
