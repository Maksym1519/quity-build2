import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayedGoods: null
}

const searchGoodsSlice = createSlice({
    name: "displayedGoods",
    initialState,
    reducers: {
        setFindingGoods: (state, action) => {
            state.displayedGoods = action.payload
        }
    }
})
export const {setFindingGoods} = searchGoodsSlice.actions
export const selectFindingGoods = (state) => state.displayedGoods.displayedGoods
export default searchGoodsSlice.reducer