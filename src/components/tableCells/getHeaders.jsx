import React from 'react';

function getHeaders(value) {
  const listOfHeaders = [];
  // referência: https://stackoverflow.com/questions/65640323/reactjs-cannot-convert-undefined-or-null-to-object-w-formik
  if (value !== null && value !== undefined
    && typeof Object.keys(value) !== 'undefined'
    && Object.keys(value).length >= 1
  ) {
    Object.keys(value).forEach((header, index) => listOfHeaders.push(
      <th key={ `header-${index}` }>{header}</th>,
    ));
  }
  return listOfHeaders;
}

export default getHeaders;
