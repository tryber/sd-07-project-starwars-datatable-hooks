import { useState, useEffect } from 'react';

const useData = () => {
  const [dataUrl, setDataUrl] = useState('');
  const [data, setData] = useState('Loading');

  useEffect(() => {
    if (dataUrl !== '') {
      fetch(dataUrl)
        .then((resulted) => resulted.json())
        .then((resultData) => setData(resultData));
    }
  }, [dataUrl]);
  return [data, setDataUrl, setData];
};

export default useData;
