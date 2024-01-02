import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: "yourExperience"
}

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
       setExperience: (state) => {
        state.currentComponent = "yourExperience"
    },
    setKnowledge: (state) => {
        state.currentComponent = "yourKnowledge"
    },
    setIncome: (state) => {
        state.currentComponent = "yourIncome"
    },
    setEvaluation: (state) => {
        state.currentComponent = "yourEvaluation"
    }
}})

export const {setExperience, setKnowledge, setIncome, setEvaluation} = testSlice.actions;
export default testSlice.reducer