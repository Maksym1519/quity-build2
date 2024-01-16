import { createSlice } from "@reduxjs/toolkit";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect, useState } from "react";
import axios from "axios";


const initialState = {
    returnState: null
}

const returnSlice = createSlice({
    name: "return",
    initialState,
    reducers: {
        setReturnInfo: (state,action) => {
          state.returnState = action.payload
        }
    }
})
export const {setReturnInfo} = returnSlice.actions;
export const returnInfo = (state) => state.return.returnState;
export default returnSlice.reducer;


export const ReturnData = () => {
 const [returnData, setReturnData] = useState();
 const dispatch = useAppDispatch();
 dispatch(setReturnInfo(returnData));
  async function getReturnInfo() {
    try {
      const responseReturn = await axios.get(
        "https://quitystrapi.onrender.com/api/returns?populate=*"
      );
      const responseDataReturn = responseReturn.data.data;
      setReturnData(responseDataReturn);
     } catch (error) {
      console.error("get data return is failed");
    }
  }
  useEffect(() => {
    getReturnInfo();
  }, []);
}