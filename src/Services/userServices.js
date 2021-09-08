/* eslint-disable no-return-await */

import axios from 'axios';

const URL = 'https://vast-cliffs-78237.herokuapp.com/';
// const URL = 'http://localhost:3001/';

export const Login = async (credentials) => await axios.post(`${URL}login`, credentials).then((response) => {
  localStorage.setItem('jwt', response.data.auth_token);
  if (response.data.auth_token) {
    localStorage.setItem(
      'user',
      JSON.stringify(response.data.user.data.attributes),
    );
  }
  return response.data.user.data.attributes;
});

export const Signup = async (credentials) => await axios.post(`${URL}signup`, credentials, { mode: 'no-cors' }).then((response) => {
  localStorage.setItem('jwt', response.data.auth_token);
  if (response.data.auth_token) {
    localStorage.setItem(
      'user',
      JSON.stringify(response.data.user.data.attributes),
    );
  }
  return response.data.user.data.attributes;
});

export const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));
// const authToken = localStorage.getItem('jwt');

export const authAxios = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('jwt'),
  },
});
