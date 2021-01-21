import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const contextValue = useContext(StarWarsContext);
  const [headers, setHeaders] = useState([]);

  const renderizeHeaders = () => {
    const { data: { results } } = contextValue;
    if (!results) return 'loading...';
    const getHeaders = Object.keys(results[1])
      .filter((header) => header !== 'residents');
    setHeaders(getHeaders);
  };

  const renderizeLines = () => {
    const { data: { results } } = contextValue;

  };

  useEffect(() => {
    renderizeHeaders();
  }, [contextValue]);

  return (
    <table>
      {contextValue.isFetching && 'loading...'}
      <tr>
        {headers.map((header) => <th key={ header }>{ header }</th>)}
      </tr>
    </table>
  );
}

export default Table;
