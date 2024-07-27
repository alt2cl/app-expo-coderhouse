import { createSlice } from "@reduxjs/toolkit";

export const resultadoSlice = createSlice({
  name: "resultado",
  initialState: {
    value: {
      time: "",
      level: "",
      wpm: 0,
      correct: 0,
      comprehension: 0,
    },
  },
  reducers: {
    setResultado: (state, { payload }) => {
      state.value.time = payload.time;
      state.value.level = payload.level;
      state.value.wpm = payload.wpm;
      state.value.correct = payload.correct;
      state.value.comprehension = payload.comprehension;
    },
    setPercent: (state, { payload }) => {
      state.value.comprehension = Math.round(
        state.value.comprehension + payload.comprehension
      );
    },
    setCorrect: (state) => {
      state.value.correct += 1;
    },
    resetAll: (state) => {
      state.value.time = "";
      state.value.level = 0;
      state.value.wpm = 0;
      state.value.correct = 0;
      state.value.comprehension = "";
    },
  },
});

export const { setResultado, resetAll, setCorrect, setPercent } =
  resultadoSlice.actions;
export default resultadoSlice.reducer;
