import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "@/lib/hooks";
import { asicInfo } from "../shopCatalogSlice";
import { useState, useEffect } from "react";

const initialState = {
  presence: false,
};

const filtrationSlice = createSlice({
  name: "filtration",
  initialState,
  reducers: {
    setPresence: (state, action) => {
      state.presence = action.payload;
    },
  },
});

export const { setPresence } = filtrationSlice.actions;
export const presenceInfo = (state) => state.filtration.presence;
export default filtrationSlice.reducer;

//filtration--------------------------------------------------------------

export const FiltrationData = () => {
  const [asicInfoServer, setAsicInfoServer] = useState();
  const [filterPresence, setFilterPresence] = useState();

  const dataFromRedux = useAppSelector(asicInfo);
  const dataFromFilter = useAppSelector(presenceInfo);
  useEffect(() => {
    if (dataFromRedux && dataFromRedux !== null) {
      setAsicInfoServer(dataFromRedux);
    }
  }, [dataFromRedux]);
  useEffect(() => {
    if (dataFromFilter && dataFromFilter !== false) {
      setFilterPresence(dataFromFilter);
    }
  }, [dataFromFilter]);
  //-------------------------------------------------------------------
  try {
    if (asicInfoServer && asicInfoServer !== null) {
      const filteredPresenseArray = asicInfoServer.filter(
        (item) => item.attributes.presence === "В наличии"
      );
    }
  } catch (error) {
    console.error("filter data is failed", error);
  }
};
