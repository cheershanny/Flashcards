import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {},
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      const newCard = {
        id,
        front,
        back,
      };
      state.cards[id] = newCard;
    },
  },
});

export const { addCard } = cardsSlice.actions;
export const selectCards = (state) => state.cards.cards;
export default cardsSlice.reducer;
