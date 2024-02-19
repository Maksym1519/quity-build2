import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    popup: false,
    appData: [{
        appNum: null,
        deployAmount: "10/10",
        dateApp: null,
        dateDeployment: null,
        dateRemove: "-",
        paid: false,
        paymentType: "Банковской картой",
        paidAmount: "0",
        id: null
       }],
       chooseNum: null,
       buyPopup: false,
       reportPopup: false,
       activeState: ""
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
        },
        setChooseNum: (state,action) => {
            state.chooseNum = action.payload
        },
        setBuyPopup: (state,action) => {
            state.buyPopup = action.payload
        },
        setReportPopup: (state,action) => {
            state.reportPopup = action.payload
        },
        setActiveState: (state,action) => {
            state.activeState = action.payload
        },

    }
}
)
export const {setPopup,setAppData,setChooseNum,setBuyPopup,setReportPopup,setActiveState} = hostingApplicationSlice.actions;
export const popupInfo = (state) => state.hostingApplication.popup;
export default hostingApplicationSlice.reducer