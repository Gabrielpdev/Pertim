import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'pertim',
      storage,
      whitelist: ['auth', 'user', 'empresa'],
    },
    reducers
  );

  return persistedReducer;
};
