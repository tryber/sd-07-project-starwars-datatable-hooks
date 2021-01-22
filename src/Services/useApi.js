const getApi = async (url) => {
  const data = await fetch(url)
    .then(async (response) => await response.json())
    .then(async (response) => await response)
    .catch((error) => console.log(error));
  return data;
};

export default getApi;
