// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './features/productsApi';

export const store = configureStore({
  reducer: {
    // Add the RTK Query API reducer
    [productApi.reducerPath]: productApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and more
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
