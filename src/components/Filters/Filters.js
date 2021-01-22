import React, { useState } from 'react';
import './style.css';

// class ExpenseForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: 0,
//       value: '',
//       currency: 'USD',
//       method: 'Dinheiro',
//       tag: 'Lazer',
//       description: '',
//       exchangeRates: {},
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   componentDidMount() {
//     const { updateCurrencies } = this.props;
//     updateCurrencies();
//   }

//   // componentDidUpdate() {
//   //   const { editing } = this.props;
//   //   (editing) ? 
//   // };

//   handleClick(event) {
//     const { addExpense, updateCurrencies } = this.props;
//     const { id } = this.state;
//     event.preventDefault();
//     updateCurrencies();
//     addExpense(this.state);
//     this.setState({ id: Number(id) + 1 });
//   }

//   handleChange({ target: { name, value } }) {
//     this.setState({ [name]: value });
//   }

//   renderValueInput() {
//     const { value } = this.state;
//     return (
//       <label htmlFor="value">
//         Valor:
//         <input
//           className="input"
//           type="text"
//           placeholder="Valor"
//           id="value"
//           data-testid="value-input"
//           name="value"
//           value={ value }
//           onChange={ this.handleChange }
//         />
//       </label>
//     );
//   }

//   renderCurrSelect() {
//     const { currencies } = this.props;
//     const { currency } = this.state;
//     return (
//       <label htmlFor="currency">
//         Moeda:
//         <select
//           className="input"
//           placeholder="Moeda"
//           id="currency"
//           data-testid="currency-input"
//           name="currency"
//           value={ currency }
//           onChange={ this.handleChange }
//         >
//           {(Object.keys(currencies).sort()).map((curr) => (
//             curr !== 'USDT' ? (
//               <option key={ curr } value={ curr } data-testid={ curr }>
//                 {curr}
//               </option>
//             ) : (
//               'erro'
//             )
//           ))}
//         </select>
//       </label>
//     );
//   }

//   renderMethodSelect() {
//     const meethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
//     const { method } = this.state;
//     return (
//       <label htmlFor="method">
//         Método:
//         <select
//           className="input"
//           id="method"
//           data-testid="method-input"
//           name="method"
//           value={ method }
//           onChange={ this.handleChange }
//         >
//           {meethod.map((item) => (
//             <option key={ item } value={ item }>
//               {item}
//             </option>
//           ))}
//         </select>
//       </label>
//     );
//   }

//   renderTagSelect() {
//     const taag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
//     const { tag } = this.state;
//     return (
//       <label htmlFor="tag">
//         Tag:
//         <select
//           className="input"
//           id="tag"
//           data-testid="tag-input"
//           name="tag"
//           value={ tag }
//           onChange={ this.handleChange }
//         >
//           {taag.map((item) => (
//             <option key={ item } value={ item }>
//               {item}
//             </option>
//           ))}
//         </select>
//       </label>
//     );
//   }

//   renderDescrInput() {
//     const { description } = this.state;
//     return (
//       <label htmlFor="description">
//         Descrição:
//         <input
//           className="input"
//           type="text"
//           placeholder="Sua descrição"
//           id="description"
//           data-testid="description-input"
//           name="description"
//           value={ description }
//           onChange={ this.handleChange }
//         />
//       </label>
//     );
//   }

//   renderButton() {
//     const { editing } = this.props;
//     return (editing ? (
//       <button className="button" type="button" onClick={ this.handleClick }>
//         Adicionar despesa
//       </button>
//     ) : (
//       <button className="button" type="button" onClick={ this.handleClick }>
//         Editar despesa
//       </button>
//     ));
//   }

//   render() {
//     const { loading } = this.props;
//     return (
//       <section className="form">
//         <div>
//           {loading ? (
//             'LOADING'
//           ) : (
//             <form>
//               {this.renderValueInput()}
//               {this.renderCurrSelect()}
//               {this.renderMethodSelect()}
//               {this.renderTagSelect()}
//               {this.renderDescrInput()}
//               {this.renderButton()}
//             </form>
//           )}
//         </div>
//       </section>
//     );
//   }
// }

function Filters() {
  
  const [state, setState ] = useState();
  
  function handleChange({ target: { name, value } }) {
    setState({ [name]: value });
  }
  
  function handleClick(event) {
    event.preventDefault();
  }

  function renderValueInput() {
    return (
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          type="number"
          placeholder="Valor"
          name="value"
          value={ state }
          onChange={ handleChange }
          className="input"
        />
      </label>
    );
  }

  function renderTextInput() {
    return (
      <label htmlFor="text">
        Name:
        <input
          id="text"
          type="text"
          name="text"
          value={ state }
          onChange={ handleChange }
          placeholder="Text to Filter"
          className="input"
        />
      </label>
    );
  }

  function renderButton() {
    return (
      <button className="button" type="button" onClick={ handleClick }>
        Filter
      </button>
    );
  }
  
  return (
    <section className="form">
      <div>
        <h2>Planets</h2>
          <form>
            {renderValueInput()}
            {renderTextInput()}
            {renderButton()}
          </form>
      </div>
    </section>
  );
}

export default Filters;
