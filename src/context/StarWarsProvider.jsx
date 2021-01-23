import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestApi from '../services/RequestApi';

const StarWarsProvide = ({ children }) => {
  // const [valor, setValor] = useState('valor inicial');
  const [data, setData] = useState();
  const [line, setLine] = useState([]);

  const context = {
    // valor a ser utilizado,
    data,
    line,
    requestApi,
  };

  const renderLines = (results) => {
    console.log(results);

    const temp = [];
    const indexOfResidents = 9;
    results.map((planeta) => temp.push(Object.values(planeta)));
    // console.log(temp);
    temp.forEach((linha) => linha.splice(indexOfResidents, 1));
    console.log(temp);
    setLine(temp);

    //   return (
    // <tr>
    //   {/* {data.map(planeta => <tr key={planeta}>{planeta.map(infoDoPlaneta => <td key={infoDoPlaneta}>{infoDoPlaneta}</td>)}</tr>)} */}
    //   {data.map(item => setLine(item))}
    // </tr>
    // );
  };

  useEffect(() => {
    async function getApi() {
      const results = await requestApi();
      await setData(results);
      await renderLines(results);
      // await console.log(results);
    }
    getApi();
  }, []);

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvide.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvide;
