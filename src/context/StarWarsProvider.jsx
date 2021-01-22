import {  useEffect, useState } from 'react';
import StarWarsContext from './StarWarsContext';

import requestApi from '../services/RequestApi';

const StarWarsProvide = ({ children }) => {
    // const [valor, setValor] = useState('valor inicial');
    const [data, setData] = useState();

    const context = {
      // valor,
      data,
      requestApi,
    };

    useEffect(() => {
      async function getApi() {
        const { newData } = await requestApi();
        setData(newData)
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
