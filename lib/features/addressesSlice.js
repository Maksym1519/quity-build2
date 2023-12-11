import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addresses: []
}

export const addressesSlice = createSlice({
    name: "addresses",
    initialState,
    reducers: {
        addAdrress: (state,action) => {
           state.addresses.push(action.payload)
        }
    }
})

export const {addAdrress} = addressesSlice.actions
export default addressesSlice.reducer