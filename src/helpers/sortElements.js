const sortFunction = (property) => {
  let sortOrder = 1;
  const negativeValue = -1;

  if (property[0] === '-') {
    sortOrder = negativeValue;
    property = property.substr(1);
  }

  return (a, b) => {
    if (sortOrder === negativeValue) {
      return b[property].localeCompare(a[property]);
    }
    return a[property].localeCompare(b[property]);
  };
};

export default (data, column, sort) => {
  const dataCopy = data.slice();

  if (column === 'name' && sort === 'ASC') {
    dataCopy.sort(sortFunction('name'));
  }

  if (column === 'name' && sort === 'DESC') {
    dataCopy.sort(sortFunction('-name'));
  }

  if (column !== 'name' && sort === 'ASC') {
    dataCopy.sort((a, b) => a[column] - b[column]);
  }

  if (column !== 'name' && sort === 'DESC') {
    dataCopy.sort((a, b) => b[column] - a[column]);
  }

  return dataCopy;
};
