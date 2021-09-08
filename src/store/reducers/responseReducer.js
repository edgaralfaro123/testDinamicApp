const stateInitial = {
  response:[]
}

export default function responseReducer(state = stateInitial, action) {
  switch (action.type) {
    case 'ADD_RESPONSE':
      return {
          ...state,
          response: action.payload
      };
    default:
      return state;
  }
}