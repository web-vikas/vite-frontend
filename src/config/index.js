const { REACT_APP_ENVIRONMENT, REACT_APP_URL } = import.meta.env

// Constant Values

const Config = {
  API_URL: REACT_APP_URL,
  // STORAGE_URL: REACT_APP_STORAGE_URL,
  UNAUTHORIZED_EXCEPTION: false,
  ENVIRONMENT: REACT_APP_ENVIRONMENT
};

export default Config;
