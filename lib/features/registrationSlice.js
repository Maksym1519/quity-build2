import { createSlice } from "@reduxjs/toolkit";


export const registrationSlice = createSlice({
    name: "registration",
    initialState: {
        registration: null
    },
    reducers: {
        setRegistrationInfo: (state,action) => {
            state.registration = action.payload
        }
    }
})
export const {setRegistrationInfo} = registrationSlice.actions;
export const selectRegistartionInfo = (state) => state.registration.registration
export default registrationSlice.reducer