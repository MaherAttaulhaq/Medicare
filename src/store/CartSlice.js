import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../components/UI/Products";

const initialState = {
  items: [
    // Example structure for items in the cart
    // {
    //   id: 1,
    //   quantity: 2,
    //}
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const { id, quantity } = action.payload;
      console.log("Adding to cart:", id, quantity);
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === id
      );
      if (existingProductIndex >= 0) {
        // If the product already exists in the cart, update its quantity
        state.items[existingProductIndex].quantity += quantity;
      } else {
        // If the product does not exist, add it to the cart
        state.items.push({ id, quantity });
      }
    },
    changequantity: (state, action) => {
      const { id, quantity } = action.payload;
      const indexProductId = state.items.findIndex((item) => item.id === id);
      if (indexProductId >= 0) {
        // Update the quantity of the product in the cart
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    removetocart: (state, action) => {
      const { id, quantity} = action.payload;
      if (id) {
        state.items = state.items.filter((item) => item.id !== id);
        // If the product is removed, log the action
        console.log("Product removed from cart:", id);
      }
      console.log("Removed from cart:", id);
    },
  },
});

export const { addtocart, changequantity, removetocart } = cartSlice.actions;

export default cartSlice.reducer;
