export const BASE_URL = 'https://api.movies-explorer.belik.nomoredomains.monster';

function _getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.message}`);
  }
  return res.json();
}

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password, name})
  })
    .then(response => _getResponseData(response));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
    .then(response => _getResponseData(response))
    .then((data) => {
      if (data.token){
        localStorage.setItem('jwt', data.token);
        return data;
      }
    })
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(response => _getResponseData(response))
    .then(data => data)
}
