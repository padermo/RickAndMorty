export const GET_USERS = 'GET_USERS';
export const DETAIL_USERS = 'DETAIL_USERS';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const ADD_CONTACT = 'ADD_CONTACT';


// esta funcion obtendra los datos de cada personaje de la API
export function getUsers() {
  return function (dispatch) {
    return fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => dispatch({ type: GET_USERS, payload: data.results }))
  }
}

// esta funcion obtendra los datos del personaje que reciba por el id y los traera de la API
export function detailUsers(payload) {
  return function (dispatch) {
    return fetch(`https://rickandmortyapi.com/api/character/${payload}`)
      .then(response => response.json())
      .then(data => dispatch({ type: DETAIL_USERS, payload: data }))
  }
}

// esta funcion agrega a favoritos
export function addFavorite(payload) {
  return {
    type: ADD_FAVORITE,
    payload
  }
}

// esta funcion elimina de favoritos
export function removeFavorite(payload) {
  return {
    type: REMOVE_FAVORITE,
    payload
  }
}

// esta funcion agrega la informacion de contacto
export function addContact(payload) {
  return {
    type: ADD_CONTACT,
    payload
  }
}