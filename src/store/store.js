import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import authSlice from "./authSlice";
import { loadState, saveState } from "./localStorage";
const persistedState = loadState();
const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth : authSlice,
  },
  preloadedState: persistedState,
});
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
