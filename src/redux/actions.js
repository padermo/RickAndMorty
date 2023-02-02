import axios from "axios";

export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_CHARACTERS_BY_NAME = 'GET_CHARACTER_BY_NAME';
export const GET_CHARACTER_BY_ID = 'GET_CHARACTER_BY_ID';
export const PREV_PAGE = 'PREV_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';

export const getAllCharacters = (page) => {
  return async (dispatch) => {
    const dataApi = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    dispatch({type: GET_ALL_CHARACTERS, payload: dataApi.data.results})
  }
}

export const getCharacterByName = (name) => {
  return async (dispatch) => {
    const dataApi = await axios.get(`https://rickandmortyapi.com/api/character?name=${name}`)
    dispatch({type: GET_CHARACTERS_BY_NAME, payload: dataApi.data.results})
  }
}

export const getCharacterById = (id) => {
  return async (dispatch) => {
    const dataApi = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    dispatch({type: GET_CHARACTER_BY_ID, payload: dataApi.data})
  }
}

export const nextPage = (page) => {
  return async (dispatch) => {
    const dataApi = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    dispatch({type: NEXT_PAGE, payload: dataApi.data.results})
  }
}

export const prevPage = (page) => {
  return async (dispatch) => {
    const dataApi = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    dispatch({type: PREV_PAGE, payload: dataApi.data.results})
  }
}