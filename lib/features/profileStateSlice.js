import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: "personalData"
}

const profileDataSlice = createSlice({
    name: "profileData",
    initialState,
    reducers: {
        personalData: (state) => {
            state.currentComponent = "personalData"
        },
        myAdresses: (state) => {
            state.currentComponent = "myAdresses"
        },
        securitySettings: (state) => {
            state.currentComponent = "securitySettings"
        }
    }
})

export const {personalData, myAdresses, securitySettings} = profileDataSlice.actions
export default profileDataSlice.reducer