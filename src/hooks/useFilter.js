import { useState, useEffect } from 'react';

function useFilter(planetsArray) {
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [byName, setByName] = useState('');
  const [byNum, setByNum] = useState({
    populationType: '',
    logic: '',
    number: 0,
  });
  useEffect(() => {
    setFilteredPlanets(
      planetsArray.filter(
        (planet) => planet.name.toLowerCase().includes(byName.toLowerCase()),
      ),
    );
  }, [byName, planetsArray]);

  useEffect(() => {
    if (byNum.populationType !== '') {
      switch (byNum.logic) {
      case 'igual a':
        setFilteredPlanets(
          planetsArray.filter(
            (planet) => planet[byNum.populationType] === byNum.number.toString(),
          ),
        );
        break;
      case 'maior que':
        setFilteredPlanets(
          planetsArray.filter(
            (planet) => planet[byNum.populationType] > byNum.number,
          ),
        );
        break;

      case 'menor que':
        setFilteredPlanets(
          planetsArray.filter(
            (planet) => planet[byNum.populationType] < byNum.number,
          ),
        );
        break;

      default:
        setFilteredPlanets(planetsArray);
        break;
      }
    } else {
      setFilteredPlanets(planetsArray);
    }
  }, [byNum, planetsArray]);

  return [filteredPlanets, setByName, setByNum, byName, byNum];
}

export default useFilter;
