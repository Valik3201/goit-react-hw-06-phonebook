/**
 * Redux store configuration and persistence setup.
 * @module reduxSetup
 */

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './reducers/contactsSlice';
import filterReducer from './reducers/filterSlice';

/**
 * Configuration for Redux persist.
 * @constant {object}
 * @property {string} key - The key for persisting data.
 * @property {number} version - The version of persisted data.
 * @property {object} storage - The storage engine for persisting data.
 */
const persistConfig = {
  key: 'phonebook',
  version: 1,
  storage,
};

/**
 * Root reducer combining all reducers.
 * @constant {function}
 */
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

/**
 * Persisted reducer with configured persistence.
 * @constant {function}
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Redux store with persisted reducer and middleware.
 * @constant {object}
 */
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

/**
 * Redux persistor for persisting Redux store.
 * @constant {object}
 */
const persistor = persistStore(store);

export { store, persistor };
