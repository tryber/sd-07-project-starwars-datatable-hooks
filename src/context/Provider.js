import React from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = React.useState();
  const [filters, setFilters] = React.useState({ filterByName: { name: '' } });
  const [column, setColumn] = React.useState('population');
  const [comparison, setComparison] = React.useState('maior que');
  const [value, setValue] = React.useState();
  const [options, setOptions] = React.useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const getFetch = async () => {
    setData(await fetchApi());
  };

  React.useEffect(() => {
    getFetch();
  }, []);

  // Para a construção desta lógica, consultei alguns repositórios dos colegas. Não sei se enquadra em plágio, e infelizmente, não sei a quem exatamente deveria creditar.
  // Gostaria de explicar o funcionamento, para demonstrar que não possuo má fé, e que aprendi o conteúdo.
  // A função a seguir 'allFilters' lida com os filtros de valores ('maior que', 'menor que' e 'igual a').
  // Primeiramente, ele esvazia quaisquer informação anterior (setData([])), e compara os valores de 'comparison', que é obtido atraves do onChange no <select> dos filtros (vide linha 57 do componente Filters).
  // No primeiro if, se 'comparison' tiver o valor de 'maior que', a função modificará o estado Data (responsável pelas informações renderizadas na tela), filtrando os itens que possuam os valores na 'column' (este valor é obtido através do <select> dos filtros (vide linha 33 do componente Filters)) maiores que os encontrados em value (este obtido no input dos filtros (vide linha 76 do componente Filters)).
  // Não sendo o caso, a função fara a conferencia novamente, e se 'comparison' receber o valor de 'menor que', a função modificará o estado Data, filtrando os itens que possuam os valores na 'column' dos filtros (vide linha 33 do componente Filters)) menores que os encontrados em 'value' (este obtido no input dos filtros (vide linha 76 do componente Filters)).
  // Não sendo nenhum dos casos anteriores, nos resta conferir se o valor de 'column' é igual ao do 'value', e Data receberá os valores que se enquadram nessa situação.
  // Após cada filtragem, queremos que esse tipo de filtro não seja mais possível (é o caso do requisito 4, 'não utilize filtros repetidos), então, mudaremos o estado das opções (option), utilizando o setOptions e filtrando os valores diferentes do utilizado na filtragem anterior. Assim, toda vez que for feito um filtro, essa opção deixa de ser exibida para ser selecionada, evitando que o usuário filtre duas vezes com o mesmo critério.
  // Peço desculpas se feri alguma regra da Trybe, e me coloco a disposição para explicar o código e suas funcionalidades.

  const allFilters = () => {
    setData([]);
    if (comparison === 'maior que') {
      setData(
        data.filter((item) => Number(item[column]) > value),
      );
    } else if (comparison === 'menor que') {
      setData(
        data.filter((item) => Number(item[column]) < value),
      );
    } else {
      setData(
        data.filter((item) => Number(item[column]) === Number(value)),
      );
    }
    setOptions(options.filter((item) => item !== column));
  };

  const reset = () => {
    setFilters({ filterByName: { name: '' } });
    setOptions([
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
    setColumn('population');
    setComparison('maior que');
    getFetch();
  };

  const state = {
    data,
    filters,
    setFilters,
    allFilters,
    setColumn,
    setComparison,
    setValue,
    options,
    reset,
  };

  return (
    <StarWarsContext.Provider value={ state }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
