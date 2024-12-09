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
import modalAddReducer from './Slices/modalAddSlice';
import modalDeleteReducer from './Slices/modalDeleteSlice';
import userReducer from './Slices/userSlice';
import idReducer from './Slices/idSlice';
import modalEditReducer from './Slices/modalEditSlice';
import userEditReducer from './Slices/userEditSlice';

const rootReducer = combineReducers({
  modalAddOpen: modalAddReducer,
  users: userReducer,
  modalDeleteOpen: modalDeleteReducer,
  id: idReducer,
  modalEditOpen: modalEditReducer,
  userEdit: userEditReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
