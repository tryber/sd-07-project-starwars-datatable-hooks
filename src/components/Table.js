import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function filterByName(info, names) {
  const data = info;
  if (data && names) {
    const result = data.filter((item) => item.name
      .toLowerCase()
      .includes(names.toLowerCase()));
    return result;
  }
  return data;
}
function filterAll(data, names, column, comparison, value) {
  const datas = data;
  if (data && column && comparison && value) {
    if (comparison === 'maior que') {
      const result = filterByName(datas, names)
        .filter((item) => Number(item[column]) > value);
      return result;
    }
    if (comparison === 'menor que') {
      const result = filterByName(datas, names)
        .filter((item) => Number(item[column]) < value);
      console.log('menor');
      return result;
    }
    const result = filterByName(datas, names)
      .filter((item) => Number(item[column]) === Number(value));
    console.log('igual');
    return result;
  }
  return filterByName(datas, names);
}

const Table = () => {
  const { data, filter } = useContext(StarWarsContext);

  const tableItems = filterAll(
    data,
    filter.filters.filterByName.name,
    filter.filters.filterByNumericValues.column,
    filter.filters.filterByNumericValues.comparison,
    filter.filters.filterByNumericValues.value,
  );

  const magicNumber = 0;
  return (
    <table>
      <thead>
        <tr>
          {
            data
              ? Object.keys(data[0]).filter((key) => key !== 'residents')
                .map((tableHeader) => (
                  <th key={ tableHeader }>
                    {tableHeader.replace('_', ' ')
                      .replace(tableHeader
                        .charAt(magicNumber), tableHeader
                        .charAt(magicNumber).toUpperCase())}
                  </th>))
              : <th>tá carregando essa bagaça.</th>
          }
        </tr>
      </thead>
      <tbody>
        {tableItems && tableItems.map((tableItem, index) => (
          <tr key={ index }>
            {Object.entries(tableItem).map(([key, value]) => {
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
