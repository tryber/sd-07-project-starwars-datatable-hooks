import React from 'react';

const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  React.useEffect(() => {
    const request = async () => {
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(json.results);
    };
    request();
  }, [options, url]);
  return response;
};

export default useFetch;
