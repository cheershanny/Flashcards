import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {},
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      const newQuiz = {
        id,
        name,
        topicId,
        cardIds,
      };
      state.quizzes[id] = newQuiz;
    },
  },
});

export const { addQuiz} = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;

export default quizzesSlice.reducer;
