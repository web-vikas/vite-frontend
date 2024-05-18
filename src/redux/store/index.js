import { configureStore } from '@reduxjs/toolkit';
import session from '../reducer/session';

export default configureStore({
  reducer: {
    session
  }
});
