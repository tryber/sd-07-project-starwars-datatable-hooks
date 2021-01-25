import React, { useState, useContext, useEffect } from 'react';
import context from '../../context';

const Order = () => {
  const firstCaracter = 0;
  const { data, changeOrder } = useContext(context);
  const initialSort = {
    column: '',
    asc: true,
    desc: false,
  };
  const [sort, setSortForms] = useState(initialSort);
  const { column, asc, desc } = sort;
  let arraySelectColumns = [];

  const filterForms = (key, val) => {
    if (key === 'column') {
      setSortForms({ ...sort, [key]: val });
    } else {
      setSortForms({ ...sort, asc: !asc, desc: !desc });
    }
  };

  useEffect(() => {
    // filterForms('asc', asc);
    // filterForms('desc', desc);
    filterForms('column', arraySelectColumns[0]);
  }, arraySelectColumns);

  if (!data) {
    return false;
  }

  arraySelectColumns = Object.keys((data) ? data[0] : [])
    .filter((item) => (item !== 'residents'))
    .map((item) => (item));

  const handleClick = () => {
    const order = (asc) ? 'ASC' : 'DESC';
    changeOrder(column, order);
  };

  return (
    <div>
      <label htmlFor="planetInformation">
        <select
          id="planetInformation"
          data-testid="column-sort"
          value={ column }
          onChange={ (event) => filterForms('column', event.target.value) }
        >
          {
            arraySelectColumns.map((element) => (
              <option key={ element } value={ element }>
                {
                  element.replace('_', ' ')
                    .replace(
                      element.charAt(firstCaracter),
                      element.charAt(firstCaracter).toUpperCase(),
                    )
                }
              </option>
            ))
          }
        </select>
      </label>
      <label htmlFor="asc">
        <input
          type="radio"
          id="asc"
          name="asc"
          value={ asc }
          data-testid="column-sort-input-asc"
          onChange={ (event) => filterForms('asc', event.target.value) }
          checked={ asc }
        />
      </label>
      <label htmlFor="desc">
        <input
          type="radio"
          id="desc"
          name="desc"
          value={ desc }
          data-testid="column-sort-input-desc"
          onChange={ (event) => filterForms('desc', event.target.checked) }
          checked={ desc }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleClick }
        onKeyPress={ handleClick }
      >
        Aplicar
      </button>
    </div>
  );
};

export default Order;
