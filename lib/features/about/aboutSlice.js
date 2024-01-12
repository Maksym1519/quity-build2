import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect,useState } from "react";
import { useAppDispatch } from "@/lib/hooks";

const initialState = {
    currentComponent: "about",
    aboutState: null
}

const AboutSlice = createSlice({
    name: "about",
    initialState,
    reducers:  {
        setAbout: (state) => {
            state.currentComponent = "about"
        },
        setRequisite: (state) => {
            state.currentComponent = "requisite"
        },
        setContacts: (state) => {
            state.currentComponent = "contacts"
        },
        setPublicOffer: (state) => {
            state.currentComponent = "publicOffer"
        },
        setAgreement: (state) => {
            state.currentComponent = "agreement"
        },
        setAboutInfo: (state,action) => {
            state.aboutState = action.payload
        }
    }
})
export const {setAbout,setRequisite,setContacts,setPublicOffer,setAgreement,setAboutInfo} = AboutSlice.actions;
export const aboutInfo = (state) => state.about.aboutState
export default AboutSlice.reducer;

export const AboutData = () => {
    const [about,setAbout] = useState()
    const dispatch = useAppDispatch()
    dispatch(setAboutInfo(about))
    async function getAboutInfo() {
        try {
         const responseAbout = await axios.get("https://quitystrapi.onrender.com/api/abouts?populate=*")
        const responseDataAbout = responseAbout.data.data
        setAbout(responseDataAbout)
        } catch(error) {
            console.error("get data about page is failed")
        } 
        }
        useEffect(() => {
         getAboutInfo()
        },[])
}

 