import Config from "config";
import axios from "axios";
import { toast } from "react-toastify";

export const API = axios.create({
  baseURL: Config.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export const APIFORMDATA = axios.create({
  baseURL: Config.API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const processFormData = (object) => {
  const formData = new FormData();
  for (const key in object) {
    const value = object[key];
    formData.append(key, value);
  }
  return formData;
};

export const handleResponse = (response) => {
  if (response?.status === 202) toast.error(response.data.error);
  else if (response?.response?.status === 500) toast.error(response?.message);
  else if (response?.response?.status === 401) {
    Config.UNAUTHORIZED_EXCEPTION = true;
    toast.error("You are not authorized for the action.");
  } else if (response?.status === 200) return response?.data;
  else toast.error("Something went wrong. Please contact server admin.");
  return false;
};

export const getToken = async () => {
  const session = localStorage.getItem("userSession")
    ? JSON.parse(localStorage.getItem("userSession"))
    : null;

  let response = session?.access_token;
  if (session && session?.token_expiry - new Date().getTime() < 1) {
    try {
      const apiresponse = await API.get(
        "/v1/auth/refresh-token/" +
          session._id +
          "/" +
          session.active_session_refresh_token
      );
      session.access_token = apiresponse.data;
      session.token_expiry = new Date().getTime() + 23 * 60 * 60 * 1000;
      response = session.access_token;
      localStorage.setItem("userSession", JSON.stringify(session));
    } catch (e) {
    }
  }
  return response;
};


export const login= (state, action) => {
  state.userSession = action.payload;
  localStorage.setItem('userSession', JSON.stringify(action.payload));
}
export const logout = (state) => {
  state.userSession = null;
  localStorage.removeItem('userSession');
  localStorage.clear();
}
export const loadSessionFromLocal = (state, action) => {
  state.userSession = action.payload;
}