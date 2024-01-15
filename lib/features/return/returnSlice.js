import { createSlice } from "@reduxjs/toolkit";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect, useState } from "react";
import axios from "axios";


const initialState = {
    backState: null
}

const backSlice = createSlice({
    name: "back",
    initialState,
    reducers: {
        setBackInfo: (state,action) => {
          state.backState = action.payload
        }
    }
})
export const {setBackInfo} = backSlice.actions;
export const backInfo = (state) => state.back.backState;
export default backSlice;


export const ReturnData = () => {
 const [returnData, setReturnData] = useState();
 const dispatch = useAppDispatch();
  
  async function getReturnInfo() {
    try {
      const responseReturn = await axios.get(
        "https://quitystrapi.onrender.com/api/returns?populate=*"
      );
      const responseDataReturn = responseReturn.data.data;
      setReturnData(responseDataReturn);
      dispatch(setReturnInfo(returnData));
    } catch (error) {
      console.error("get data return is failed");
    }
  }
  useEffect(() => {
    getReturnInfo();
  }, []);
}