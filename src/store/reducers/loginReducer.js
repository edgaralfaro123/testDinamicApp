
const stateInitial = {
    user: null,
    token: null
}

export default function loginReducer(state = stateInitial, action) {
    switch (action.type) {
      case 'LOGIN':
        const {user,token} = action.payload
        return {
            ...state,
            user,
            token
        };
      default:
        return state;
    }
  }