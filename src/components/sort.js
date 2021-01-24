import React, { useContext, useEffect } from "react";
import StarWarsContext from "../context/StarWarsContext";

function Sort() {
  const {
    setFilters,
    filters,
    filterData,
    setSortedData,
    setUseSortedData,
  } = useContext(StarWarsContext);

  const sortColumn = (value) => {
    setFilters({
      ...filters,
      order: {
        ...filters.order,
        column: value,
      },
    });
  };

  const sortOrder = (value) => {
    setFilters({
      ...filters,
      order: {
        ...filters.order,
        sort: value,
      },
    });
  };

  const compare = (a, b) => {
    const { column } = filters.order;

    const dataA = a[column];
    const dataB = b[column];

    let comparison = 0;
    if (dataA > dataB) {
      comparison = 1;
    } else if (dataA < dataB) {
      comparison = -1;
    }
    return comparison;
  };

  const doTheSort = () => {
    const cloneFilterData = [...filterData];
    cloneFilterData.sort(compare);
    setSortedData(cloneFilterData);
    setUseSortedData(true);
  };

  useEffect(() => {
    doTheSort()
  }, [filterData])

  const columns = [
    "climate",
    "created",
    "diameter",
    "edited",
    "films",
    "gravity",
    "name",
    "orbital_period",
    "population",
    "rotation_period",
    "surface_water",
    "terrain",
    "url",
  ];

  return (
    <StarWarsContext.Consumer>
      {() => (
        <div>
          <h1>Sort</h1>
          <label htmlFor="columns">
            Selecione uma coluna
            <select
              data-testid="column-sort"
              id="columns"
              onClick={(event) => sortColumn(event.target.value)}
            >
              {columns.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <input
            data-testid="column-sort-input-asc"
            name="sort"
            type="radio"
            id="ASC"
            value="ASC"
            onClick={(event) => sortOrder(event.target.value)}
          />
          <label htmlFor="ASC">Ascendente</label>
          <input
            data-testid="column-sort-input-desc"
            name="sort"
            type="radio"
            id="DESC"
            value="DESC"
            onClick={(event) => sortOrder(event.target.value)}
          />
          <label htmlFor="DESC">Descendente</label>
          <button
            data-testid="column-sort-button"
            type="button"
            onClick={doTheSort}
          >
            Ordenar
          </button>
        </div>
      )}
    </StarWarsContext.Consumer>
  );
}

export default Sort;
