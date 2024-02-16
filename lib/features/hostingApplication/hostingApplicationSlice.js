import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    popup: false
}

export const hostingApplicationSlice = createSlice({
    name: "hostingApplication",
    initialState,
    reducers: {
        setPopup: (state,action) => {
            state.popup = action.payload
        }
    }
}
)
export const {setPopup} = hostingApplicationSlice.actions;
export const popupInfo = (state) => state.hostingApplication.popup;
export default hostingApplicationSlice.reducer