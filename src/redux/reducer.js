import {GET_ALL_CHARACTERS, GET_CHARACTERS_BY_NAME, GET_CHARACTER_BY_ID, PREV_PAGE, NEXT_PAGE} from './actions'

const initialState = {
  characters: [],
  character: {},
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_ALL_CHARACTERS:
      return{
        ...state,
        characters: action.payload
      }
    case GET_CHARACTERS_BY_NAME:
      return{
        ...state,
        characters: action.payload
      }
    case GET_CHARACTER_BY_ID:
      return{
        ...state,
        character: action.payload
      }
    case NEXT_PAGE:
      return{
        ...state,
        characters: action.payload
      }
    case PREV_PAGE:
      return{
        ...state,
        characters: action.payload
      }
    default:
      return state;
  }
}