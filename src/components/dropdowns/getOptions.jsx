import React from 'react';

function getOptions(columns) {
  const listOfOptions = [];
  columns.forEach((column) => {
    listOfOptions.push(
      <option
        value={ column }
        key={ column }
      >
        { column }
      </option>,
    );
  });
  return listOfOptions;
}

export default getOptions;
