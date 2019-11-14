const actions = {
  loginRequest: 'LOGIN_REGUEST',
  registerRequest: 'REGISTER_REGUEST',
};
const loginReguest = (payload) => ({
  type: actions.loginRequest,
  payload,
});
const registerReguest = (payload) => ({
  type: actions.registerRequest,
  payload,
});

export { loginReguest, registerReguest, actions };
