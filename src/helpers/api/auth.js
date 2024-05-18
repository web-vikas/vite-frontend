import { handleResponse, API } from './utils';

const auth = {
  login: async (email, password) => {
    let response = null;
    try {
      response = await API.post('/v1/auth/login', {
        email: email,
        password: password
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  loginByToken: async (email, refresh_token) => {
    let response = null;
    await API.get('/v1/auth/login-by-token/' + email.toLowerCase() + '/' + refresh_token)
      .then(function (res) {
        response = res;
      })
      .catch(function (error) {
        // console.log(error.response)
        response = error;
      });
    return handleResponse(response);
  },
  sendOTP: async (email) => {
    let response = null;
    try {
      response = await API.post('/v1/auth/send-otp', {
        email: email
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  verifyOTP: async (email, otp) => {
    let response = null;
    try {
      response = await API.post('/v1/auth/verify-otp', {
        email: email,
        otp: otp
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  resetPassword: async (email, password, confirm_password) => {
    let response = null;
    try {
      response = await API.post('/v1/auth/reset-password', {
        email: email,
        password: password,
        confirm_password: confirm_password
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  forgetPassword: async (email) => {
    let response = null;
    try {
      response = await API.post('/v1/auth/forget-password', {
        email: email
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  }
};

export default auth;
