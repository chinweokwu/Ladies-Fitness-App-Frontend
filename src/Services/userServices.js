import axios from "axios";

const URL = "http://localhost:3001/";

export const Login = async (credentials) => {
  return await axios.post(URL + "login", credentials).then((response) => {
    localStorage.setItem("jwt", response.data.auth_token);
    if (response.data.auth_token) {
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user.data.attributes)
      );
    }
    return response.data.user.data.attributes;
  });
};

export const Signup = async (credentials) => {
  return await axios.post(URL + "signup", credentials).then((response) => {
    localStorage.setItem("jwt", response.data.auth_token);
    if (response.data.auth_token) {
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user.data.attributes)
      );
    }
    return response.data.user.data.attributes;
  });
};

export const Logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("jwt");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authToken = localStorage.getItem("jwt");
console.log(authToken);

export const authAxios = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": authToken,
  },
});
