import { createSlice } from "@reduxjs/toolkit";

export const getClientInfoSlice = createSlice({
    name: "clientsInfo",
    initialState: {
        clientsInfo: null
    },
    reducers: {
        getClientsInfo: (state,action) => {
            state.clientsInfo = action.payload
        }
    }
})

export const {getClientsInfo} = getClientInfoSlice.actions;
export const selectClientsInfo = (state) => state.clientsInfo.clientsInfo;
export default getClientInfoSlice.reducer