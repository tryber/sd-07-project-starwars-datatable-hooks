const getApi = async (url) => {
  const data = await fetch(url)
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => console.log(error));
  return data;
};

export default getApi;
