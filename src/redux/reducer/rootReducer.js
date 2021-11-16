import { combineReducers } from 'redux';
import { AppReducer } from 'App/reducer/App.reducer';
import { configureStore } from '@reduxjs/toolkit';
import { AuthenticationReducer } from 'modules/auth/reducers/authenticationReducer';

const appReducer = configureStore({
  /* your app’s top-level reducers */
  reducer: {
    app: AppReducer,
    auth: AuthenticationReducer
  }
});

const rootReducer = () => {
  return appReducer;
};

export default rootReducer;
