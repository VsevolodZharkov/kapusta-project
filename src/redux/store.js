import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import authReducer from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';

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

const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid', 'userData'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfigAuth, authReducer),
  },

  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };

// const persistedReducer = persistedReducer(persistConfig, authReducer);