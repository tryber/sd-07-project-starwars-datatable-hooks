import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import FiltersForm from './components/FiltersForm';

function App() {
  return (
    <Provider>
      <FiltersForm />
      <Table />
    </Provider>
  );
}

export default App;

// {/* <table>
//         <thead>
//           <tr>
//             <th>Descrição</th>
//             <th>Tag</th>
//             <th>Método de pagamento</th>
//             <th>Valor</th>
//             <th>Moeda</th>
//             <th>Câmbio utilizado</th>
//             <th>Valor convertido</th>
//             <th>Moeda de conversão</th>
//             <th>Editar/Excluir</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Teste 1</td>
//             <td>teste 2</td>
//             <td>teste 3</td>
//             <td>teste 4</td>
//             {/* <td>{ exchangeRates[currency].name }</td>
//         <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
//         <td>{ parseFloat(value) * parseFloat(exchangeRates[currency].ask) }</td> */}
//             <td>Real</td>
//             <td>
//               <button
//                 type="button"
//                 data-testid="delete-btn"
//                 // onClick={ () => deleteExpense(id) }
//               >
//                 Deletar
//               </button>
//             </td>
//           </tr>
//           {/* { expenses.map((expense) => this.renderElements(expense)) } */}
//         </tbody>
//       </table> */}
