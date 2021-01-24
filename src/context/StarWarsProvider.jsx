import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestApi from '../services/RequestApi';

const StarWarsProvide = ({ children }) => {
  // const [valor, setValor] = useState('valor inicial');
  const [data, setData] = useState();
  const [line, setLine] = useState([]);
  const [filterName, setFilterName] = useState({});
  const [newRender, setNewRender] = useState(false);

  const renderLines = (results) => {
    const temp = [];
    const indexOfResidents = 9;
    results.map((planeta) => temp.push(Object.values(planeta)));
    // console.log(temp);
    temp.forEach((linha) => linha.splice(indexOfResidents, 1));
    // console.log(temp);
    setLine(temp);
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

    const filterNameInput = ({ target }) => {
      const { value } = target;
      const input = data.filter((item) => item.name.includes(value));
      setNewRender(true);
      setFilterName({ filterByName: { input } });
    }

    const context = {
      // valor a ser utilizado,
      data,
      line,
      filterName,
      newRender,
      requestApi,
      filterNameInput,
    };

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
