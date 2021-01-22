const filterCompare = (comparison, dataFilter, column, value) => {
  if (comparison === 'igual a') {
    return dataFilter.filter((item) => item[column] === value);
  } if (comparison === 'maior que') {
    return dataFilter.filter((item) => Number(item[column]) > value);
  } if (comparison === 'menor que') {
    return dataFilter.filter((item) => item[column] <= value);
  }
};

export default filterCompare;
