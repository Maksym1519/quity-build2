import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    devices: [],
    closeAside: null
}

const devicesSlice = createSlice({
    name: "myDevices",
    initialState,
    reducers: {
        setMyDevices: (state,action) => {
            state.devices = action.payload
        },
        setCloseAside: (state,action) => {
            state.closeAside = action.payload
        }
    }
})
export const {setMyDevices,setCloseAside} = devicesSlice.actions;
export default devicesSlice.reducer