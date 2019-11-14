const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REGUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REGUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
