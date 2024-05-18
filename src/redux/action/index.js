import { sessionActions } from '../reducer/session';

// Actions from SessionReducer
export const {
  loadingStart,
  loadingStop,
  login,
  logout,
  toggleSideNav,
  toggleMenu,
  loadSessionFromLocal
} = sessionActions;
