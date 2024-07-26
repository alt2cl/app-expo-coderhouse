import { createSlice } from "@reduxjs/toolkit";

export const resultadoSlice = createSlice({
  name: "resultado",
  initialState: {
    value: {
      time: "",
      level: "",
      ppm: 0,
      correct: 0,
      comprehension: 0,
    },
  },
  reducers: {
    setResultado: (state, { payload }) => {
      state.value.time = payload.time;
      state.value.level = payload.level;
      state.value.ppm = payload.ppm;
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
      state.time = 0;
      state.time = 0;
      state.level = "";
      state.ppm = 0;
      state.correct = 0;
      state.comprehension = "";
    },
  },
});

export const { setResultado, resetAll, setCorrect, setPercent } =
  resultadoSlice.actions;
export default resultadoSlice.reducer;
