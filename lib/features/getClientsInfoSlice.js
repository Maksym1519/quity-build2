import { useState, useEffect } from "react";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hooks";
//----------------------------------------------------------------
export const getClientInfoSlice = createSlice({
    name: "clientsInfo",
    initialState: {
        clientsInfo: null
    },
    reducers: {
        setClientsAvatar: (state,action) => {
            state.clientsInfo = action.payload
        }
        }
})

export const {setClientsAvatar} = getClientInfoSlice.actions;
export const selectClientsInfo = (state) => state.clientsInfo.clientsInfo;
export default getClientInfoSlice.reducer;

export const ClientsInformation = () => {
  //localStorage-------------------------------------
  const dataStorage = localStorage.getItem("id")
  console.log(dataStorage)
  //get-data-for-avatar------------------------------
  const [avatar,setAvatar] = useState();
  const [userName,setUserName] = useState();
  const dispatch = useAppDispatch();
  dispatch(setClientsAvatar(avatar))
  async function getClientsInformation() {
    try {
      const response = await axios.get("https://quitystrapi.onrender.com/api/clients?populate=*")  
      const dataResponse = response.data.data
      const matchingClient = dataResponse.filter((item) => item.attributes.email === dataStorage)
      const matchingClientEmail = matchingClient[0].attributes.email
      const responseProfile = await axios.get("https://quitystrapi.onrender.com/api/profiles?populate=*")
      const dataResponseProfile = responseProfile.data.data
      const matchingProfile = dataResponseProfile.filter((item) => item.attributes.email === matchingClientEmail)
      const matchingAvatar = matchingProfile[0].attributes.avatar.data.attributes.url
      setAvatar(matchingAvatar)
      //--set-name--------------------------------------------------------
      const matchingUserName = matchingProfile[0].attributes.fullName
      setUserName(matchingUserName)
      } catch(error) {
      console.error("get clients info is failed",error)
    }
  }
  useEffect(() => {
    getClientsInformation()
  },[])
}