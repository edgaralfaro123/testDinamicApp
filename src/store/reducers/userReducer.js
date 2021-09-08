const stateInitial = {
  users:[{
    type:'1',
    email:'alfa-_01@outlook.es',
    password:'12345678',
    name:'Edgar Alfaro Mora'
  }]
}

export default function userReducer(state = stateInitial, action) {
  switch (action.type) {
    case 'ADD_USER':
      const {user} = action.payload
      return {
          ...state,
          users: user
      };
    default:
      return state;
  }
}