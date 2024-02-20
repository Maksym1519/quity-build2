import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    devices: []
}

const devicesSlice = createSlice({
    name: "myDevices",
    initialState,
    reducers: {
        setMyDevices: (state,action) => {
            state.devices = action.payload
        }
    }
})
export const {setMyDevices} = devicesSlice.actions;
export default devicesSlice.reducer