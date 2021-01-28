import { useContext, useState, useEffect } from 'react';
import context from '../contextAPI/Context';

const useEvent = () => {
  const randon = 0;
  const [getEvent, setGetEvent] = useState(randon);

  const { column, comparison, values, data, setFilteredData } = useContext(context);
  const { number } = values;
  const { column: planetThings } = column;
  const { comparison: parameter } = comparison;
  const myNumber = parseInt(number, 10);

  useEffect(() => {
    switch (parameter) {
    case 'maior que': {
      const itemFilteredGreatThan = data
        .filter((element) => element[planetThings] > myNumber);
      setFilteredData(itemFilteredGreatThan);
      break;
    }
    case 'igual a': {
      const itemFilteredIqual = data
        .filter((element) => element[planetThings] === number);
      setFilteredData(itemFilteredIqual);
      break;
    }
    case 'menor que': {
      const itemFilteredLessThan = data
        .filter((element) => element[planetThings] < myNumber);
      setFilteredData(itemFilteredLessThan);
      break;
    }
    default:
      setFilteredData(data);
    }
  }, [getEvent]);
  return [setGetEvent];
};

export default useEvent;
