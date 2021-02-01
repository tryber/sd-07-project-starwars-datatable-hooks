import React, { useState, useEffect } from "react";

/**FONTES: https://pt-br.reactjs.org/docs/faq-ajax.html
 *  https://medium.com/better-programming/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd*/

const Table = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://swapi-trybe.herokuapp.com/api/planets/");
      res
        .json()
        .then(res => {
            setPlanets(res)
            setIsLoaded(true)
        })
        .catch(err => {
            setErrors(err)
            setIsLoaded(true)
        });
    }
    fetchData();
  }, []);

  if (hasError) {
    return <div>Error: {JSON.stringify(hasError)}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <span>{JSON.stringify(planets)}</span>
    );
  }
};
export default Table;


/* import React, { useState, useEffect } from 'react'


function Table() {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = () => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then(res => res.json())
      .then(
        (json) => {
          setPlanets(json);
        },
      )
  }

    return (
        <div>{ }</div>
    );

}

export default Table; */