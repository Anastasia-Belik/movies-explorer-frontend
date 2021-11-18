export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

function _getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.message}`);
  }
  return res.json();
}

export const getMovies = (token) => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => _getResponseData(res))
}
