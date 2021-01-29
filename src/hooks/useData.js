import { useState, useEffect } from 'react';

const useData = () => {
  const [dataUrl, setDataUrl] = useState('');
  const [data, setData] = useState('Loading');
  const reject = -1;
  useEffect(() => {
    if (dataUrl !== '') {
      fetch(dataUrl)
        .then((resulted) => resulted.json())
        .then((resultData) => setData(
          { results: [
            ...resultData.results.sort((a, b) => (a.name > b.name ? 1 : reject))] },
        ));
    }
  }, [dataUrl, reject]);
  return [data, setDataUrl, setData];
};

export default useData;
