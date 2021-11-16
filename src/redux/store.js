import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createStore, applyMiddleware, compose } from 'redux';

// Logger with default options
import logger from 'redux-logger';

//reducer
import rootReducer from './reducer/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);

// let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(logger)));
// let persistor = persistStore(store);

// export { store, persistor, sagaMiddleware };
