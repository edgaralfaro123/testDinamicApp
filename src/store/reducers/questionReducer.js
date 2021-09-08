import questions from "../../consts/questions";
const stateInitial = {
  questions
}

export default function questionReducer(state = stateInitial, action) {
  switch (action.type) {
    case 'ADD_POLL':
      const {poll,user} = action.payload
      return {
          ...state,
          poll,
          user
      };
    default:
      return state;
  }
}