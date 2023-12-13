import { createSlice } from "@reduxjs/toolkit";

const getIdSlice = createSlice({
    name: "localStorage",
    initialState: {
        value: null
    },
    reducers: {
        getId: (state, action) => {
            state.value = action.payload
        }
    }
})
export const {getId} = getIdSlice.actions
export const selectData = (state) => {
    const value = state.localStorage.value
    return value
}

export default getIdSlice.reducer