import React, {  useEffect, useState } from 'react';
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


  const renderLines = (data) => {
    console.log(data);

    const temp = [];
    //tratar data ate sobrar a string que eu quero
    // remover index 9
    data.map(planeta => /* console.log(Object.values(planeta)) */ temp.push(Object.values(planeta)));
    // console.log(temp);
    temp.forEach((linha) => linha.splice(9, 1))
    console.log(temp);
    setLine(temp);

    //   return (
    // <tr>
    //   {/* {data.map(planeta => <tr key={planeta}>{planeta.map(infoDoPlaneta => <td key={infoDoPlaneta}>{infoDoPlaneta}</td>)}</tr>)} */}
    //   {data.map(item => setLine(item))}
    // </tr>
    // );
  }

    useEffect(() => {
      async function getApi() {
        const results = await requestApi();
        await setData(results);
        await renderLines(results);
        // await console.log(results);
      }
      getApi();
    }, []);
    
    return(
      <StarWarsContext.Provider value={context}>
        {children}
      </StarWarsContext.Provider>
    );
}  

  export default StarWarsProvide;
