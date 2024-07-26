import { configureStore } from "@reduxjs/toolkit";
import resultadoReducer from "@/features/ResultadoSlice";
import authReducer from "@/features/AuthSlice";
import { authApi } from "@/services/authService";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    resultado: resultadoReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      //.concat(shopApi.middleware)
      .concat(authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
