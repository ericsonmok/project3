const initialState = {
  searchTerm: ""
}

const internal = (state = initialState, action) =>{

  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.text
      }
    break;

    default:
      return state
  }
}

export default internal;
