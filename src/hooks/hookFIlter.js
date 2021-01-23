const filterCompare = (comparison, dataFilter, column, value) => {
  if (comparison === 'igual a') {
    return dataFilter.filter((item) => Number(item[column]) === Number(value));
  } if (comparison === 'maior que') {
    return dataFilter.filter((item) => Number(item[column]) > Number(value));
  } if (comparison === 'menor que') {
    return dataFilter.filter((item) => Number(item[column]) < Number(value));
  }
};

export default filterCompare;
