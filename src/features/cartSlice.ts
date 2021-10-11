import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types";

const initialState: IProduct[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<IProduct>) => {
      const existingItem = state.find((el) => el.id === payload.id);

      if (existingItem) {
        existingItem.amount += payload.amount;
      } else {
        state.push(payload);
      }
    },
    dec: (state, { payload }: PayloadAction<number>) => {
      const existingItem = state.find((el) => el.id === payload);

      if (existingItem) {
        existingItem.amount--;

        if (existingItem.amount === 0) {
          state.splice(state.indexOf(existingItem), 1);
        }
      }
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      const index = state.findIndex((el) => el.id === payload);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    clear: (state) => {
      return initialState;
    },
  },
});

export const { add, dec, remove, clear } = cartSlice.actions;

export default cartSlice.reducer;
