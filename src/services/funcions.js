const comparisonTerm = (acc, column, comparison, value) => {
  switch (comparison) {
  case 'maior que':
    acc = acc.filter((item) => item[column] > +value);
    return acc;
  case 'menor que':
    acc = acc.filter((item) => item[column] < +value);
    return acc;
  case 'igual a':
    acc = acc.filter((item) => item[column] == +value);
    return acc;
  default:
    break;
  }
};

const filterByTag = (data, name, filterByNumericValues) => {
  if (!filterByNumericValues.length && !name) {
    return data;
  }
  let filteredList = [...data];
  if (name) {
    filteredList = data.filter((item) => (
      item.name.toUpperCase()
        .includes(name.toUpperCase())));
    return filteredList;
  }
  let result;
  if (filterByNumericValues.length) {
    result = filterByNumericValues.reduce((acc, item) => {
      const { column, comparison, value } = item;
      return comparisonTerm(acc, column, comparison, value);
    }, filteredList);
    return result;
  }
};

export default filterByTag;
