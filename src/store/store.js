import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import { loadState, saveState } from "./localStorage";
const persistedState = loadState();
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedState,
});
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
