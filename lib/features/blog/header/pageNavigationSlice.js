import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageNavigation: null
}

const PageNavigationSlice = createSlice({
    name: "pageNavigation",
    initialState,
    reducers: {
        setPageNavigation: (state, action) => {
            state.pageNavigation = action.payload
        }
    }
})
export const pageNavigationInfo = (state) => state.pageNavigation.pageNavigation;
export const {setPageNavigation} = PageNavigationSlice.actions;
export default PageNavigationSlice.reducer
