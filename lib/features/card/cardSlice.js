import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: "catalog",
    order: null,
    cardState: null
}

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        setCatalog: (state) => {
          state.currentComponent = "catalog"
        },
        setCard: (state) => {
            state.currentComponent = "card"
        },
        setInfo: (state,action) => {
            state.cardState = action.payload
        }
    }
})
export const {setInfo,setCard,setCatalog} = cardSlice.actions;
export const cardInfo = (state) => state.card.cardState
export default cardSlice.reducer