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

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => _getResponseData(res))
}

export const updateUserInfo = (name, email, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({name, email})
  })
    .then(res => _getResponseData(res))
}

export const saveMovie = (movie, token) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    id,
  } = movie

  return fetch(`${BASE_URL}/movies/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image: `https://api.nomoreparties.co${image.url}`,
      trailer: trailerLink,
      nameRU,
      nameEN,
      thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
      movieId: id,
    })
  })
    .then(res => _getResponseData(res))
}

export const deleteMovie = (id, token) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => _getResponseData(res))
}


