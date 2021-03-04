// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import StarWarsContext from './StarWarsContext';
// import starWarsAPI from '../services/Services';

// function Provider({ children }) {
//   const [planets, setPlanets] = useState([]);

//   const [filters, setFilters] = useState({
//     filterByName: {
//       name: '',
//     },
//     filterByNumericValues: [],
//   });

//   const [listPlanetsFilters, setListePlanetsFilters] = useState([]);

//   // const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
//   // async function user() {
//   //   const { results } = await fetch(url)
//   //     .then((response) => response.json());
//   //   results.map((item) => delete item.residents);
//   //   setPlanets(results);
//   //   setListePlanetsFilters(results);
//   // }
//   const fetchPlanets = async () => {
//     const { results } = await starWarsAPI();
//     const expected = results.filter((result) => delete result.residents);
//     setPlanets(expected);
//     setListePlanetsFilters(expected);
//   };

//   function filteredName() {
//     if (!filters.filterByName) return undefined;
//     return (planets
//       .filter((planet) => planet.name.toLowerCase()
//         .includes(filters.filterByName.name.toLowerCase())));
//   }

//   function filteredNumbers(filtradosPorNomes) {
//     if (!filters.filterByNumericValues.length) {
//       return setListePlanetsFilters(filtradosPorNomes);
//     }
//     let resultadoFiltrado = filtradosPorNomes;
//     filters.filterByNumericValues.forEach((filteredNumeric) => {
//       resultadoFiltrado = resultadoFiltrado.filter((filtrado) => {
//         switch (filteredNumeric.comparison) {
//         case 'maior que':
//           if (
//             parseInt(filtrado[filteredNumeric.column], 10)
//             > parseInt(filteredNumeric.value, 10)
//           ) return true;
//           break;
//         case 'menor que':
//           if (
//             parseInt(filtrado[filteredNumeric.column], 10)
//             < parseInt(filteredNumeric.value, 10)
//           ) return true;
//           break;
//         case 'igual a':
//           if (
//             parseInt(filtrado[filteredNumeric.column], 10)
//             === parseInt(filteredNumeric.value, 10)
//           ) return true;
//           break;
//         default:
//           return false;
//         }
//         return false;
//       });
//     });
//     setListePlanetsFilters(resultadoFiltrado);
//   }

//   useEffect(() => {
//     const filtradosPorNomes = filteredName();
//     filteredNumbers(filtradosPorNomes);
//   }, [filteredName, filteredNumbers, filters]);

//   useEffect(() => {
//     (fetchPlanets());
//   }, []);

//   const states = {
//     planets,
//     setPlanets,
//     filters,
//     setFilters,
//     listPlanetsFilters,
//   };

//   return (
//     <StarWarsContext.Provider value={ states }>
//       {children}
//     </StarWarsContext.Provider>
//   );
// }

// Provider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default Provider;
