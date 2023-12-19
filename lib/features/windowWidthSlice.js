import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    screenWidth: window.innerWidth
};
export const windowWidthSlice = createSlice({
    name: "screenWidth",
   initialState,
    reducers: {
        updateScreenWidth: (state,action) => {
            state.screenWidth = action.payload
        }
    }
})

export const {updateScreenWidth} = windowWidthSlice.actions
export default windowWidthSlice.reducer