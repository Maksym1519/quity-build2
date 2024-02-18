import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    popup: false,
    appData: [{
        appNum: null,
        deployAmount: "10/10",
        dateApp: null,
        dateDeployment: null,
        dateRemove: "-",
        paid: null,
        paymentType: "Банковской картой",
        paidAmount: null,
       }]
}

export const hostingApplicationSlice = createSlice({
    name: "hostingApplication",
    initialState,
    reducers: {
        setPopup: (state,action) => {
            state.popup = action.payload
        },
        setAppData: (state,action) => {
            state.appData = action.payload
        }
    }
}
)
export const {setPopup,setAppData} = hostingApplicationSlice.actions;
export const popupInfo = (state) => state.hostingApplication.popup;
export default hostingApplicationSlice.reducer