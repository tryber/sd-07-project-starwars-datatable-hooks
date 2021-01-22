import { useState, useEffect } from 'react';

const useFetch = (url, method = 'get') => {
  const [response, setResponse] = useState({
    payload: null,
    loading: true,
  });

  useEffect(() => {
    fetch(url, { method })
      .then((resp) => resp.json())
      .then((json) => setResponse({
        payload: json.results,
        loading: false,
      }));
  }, [url, method]);
  return response;
};

export default useFetch;
