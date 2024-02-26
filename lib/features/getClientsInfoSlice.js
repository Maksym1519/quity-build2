import { useState, useEffect } from "react";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useSelector } from "react-redux";

//----------------------------------------------------------------
export const getClientInfoSlice = createSlice({
  name: "clientsInfo",
  initialState: {
    clientsInfo: null,
    clientsName: null,
    newAvatar: null,
  },
  reducers: {
    setClientsAvatar: (state, action) => {
      state.clientsInfo = action.payload;
    },
    setClientsName: (state, action) => {
      state.clientsName = action.payload;
    },
    setNewAvatar: (state, action) => {
      state.newAvatar = action.payload;
    },
  },
});

export const { setClientsAvatar, setClientsName, setNewAvatar } =
  getClientInfoSlice.actions;
export const selectClientsInfo = (state) => state.clientsInfo.clientsInfo;
export const selectClientsName = (state) => state.clientsInfo.clientsName;
export default getClientInfoSlice.reducer;

export const ClientsInformation = () => {
  //localStorage-------------------------------------
  const dataStorage = localStorage.getItem("id");
  //get-data-for-avatar------------------------------
  const [avatar, setAvatar] = useState();
  const [userName, setUserName] = useState();
  const dispatch = useAppDispatch();
  dispatch(setClientsAvatar(avatar));
  dispatch(setClientsName(userName));
  //get-avatar-state-------------------------------------------
   const avatarReduxState = useSelector((state) => state.clientsInfo.newAvatar)
  async function getClientsInformation() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/clients?populate=*"
      );
      const dataResponse = response.data.data;
      const matchingClient = dataResponse.filter(
        (item) => item.attributes.email === dataStorage
      );
      const matchingClientEmail = matchingClient[0].attributes.email;
      const responseProfile = await axios.get(
        "https://quitystrapi.onrender.com/api/clients?populate=*"
      );
      const dataResponseProfile = responseProfile.data.data;
      const matchingProfile = dataResponseProfile.filter(
        (item) => item.attributes.email === matchingClientEmail
      );
      const matchingAvatar =
        matchingProfile[0].attributes.avatar.data.attributes.url;
      setAvatar(matchingAvatar);
      //--set-name--------------------------------------------------------
      const matchingUserName = matchingProfile[0].attributes.fullName;
      setUserName(matchingUserName);
      } catch (error) {
      console.error("get clients info is failed", error);
    }
  }
  useEffect(() => {
    getClientsInformation();
  }, []);
  useEffect(() => {
   if (avatarReduxState === true) {
    getClientsInformation();
   }
  },[avatarReduxState])
};
