import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { baseDatos } from "./Store";

export const Store = configureStore({
  reducer: { [baseDatos.reducerPath]: baseDatos.reducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseDatos.middleware),
});

setupListeners(Store.dispatch);
