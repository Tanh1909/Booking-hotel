const LOGIN = "LOGIN";
const loginAction = (value) => {
  return {
    type: LOGIN,
    payload: value,
  };
};
const logoutAction = () => {
  return {
    type: LOGIN,
    payload: {},
  };
};

export { LOGIN, loginAction, logoutAction };
