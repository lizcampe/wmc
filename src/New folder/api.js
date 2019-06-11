const API_URL = 'http://localhost:3001';

function parseResponse(response) {
  return response.json();
}

function checkResponse(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`Fetch error: ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  throw error;
}

function handleError(error) {
  console.log(error);
  return [];
}

function createQuery(queryObject) {
    return `?${Object.keys(queryObject)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`)
        .join('&')}`;
  }

function getData(path) {
  return fetch(`${API_URL}/${path}`).then(checkResponse).then(parseResponse).catch(handleError);
}

function getDataWithQuery(queryObject, path) {
    return getData (`${path}${createQuery(queryObject)}`);
}

export {
  getData,
  getDataWithQuery,
};
