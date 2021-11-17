import { combineReducers } from 'redux';
import { AppReducer } from 'App/reducer/App.reducer';
import { configureStore } from '@reduxjs/toolkit';
import { AuthenticationReducer } from 'modules/auth/reducers/authenticationReducer';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from 'redux/saga/rootSaga';
import { StoreReducer } from 'modules/list/reducers/listReducer';
import { StoreDetailReducer } from 'modules/detail/reducers/detailReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  /* your app’s top-level reducers */
  reducer: {
    app: AppReducer,
    auth: AuthenticationReducer,
    list: StoreReducer,
    detail: StoreDetailReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, logger)
});

sagaMiddleware.run(rootSaga);

// const rootReducer = () => {
//   return appReducer;
// };

export default store;
