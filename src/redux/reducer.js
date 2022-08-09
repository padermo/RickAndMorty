import { GET_USERS, DETAIL_USERS, ADD_FAVORITE, REMOVE_FAVORITE, ADD_CONTACT } from "./action";

const initialState = {
  personajes: [],
  favoritos: [],
  detail: {},
  contact: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        personajes: action.payload
      }
    case DETAIL_USERS:
      return {
        ...state,
        detail: action.payload
      }
    case ADD_FAVORITE:
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload]
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favoritos: state.favoritos.filter(fav => fav.id !== action.payload.id)
      }
    case ADD_CONTACT:
      return {
        ...state,
        contact: action.payload
      }
    default:
      return state
  }
}