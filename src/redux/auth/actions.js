import * as actions from './constants';

export const signUp = ({ email, password, first_name, last_name, location, age }) => ({
  type: actions.AUTH_SIGNUP_REQUEST,
  email,
  password,
  first_name,
  last_name,
  location,
  age,
});

export const login = ({ email, password }) => ({
  type: actions.AUTH_LOGIN_REQUEST,
  email,
  password
});

export const logout = () => ({
  type: actions.AUTH_LOGOUT,
});

export const resetPassword = ({ email }) => ({
  type: actions.AUTH_PASSWORD_RECOVER_REQUEST,
  email,
});

export const setUser = (email, token) => ({
  type: actions.AUTH_USER,
  email,
  token,
});