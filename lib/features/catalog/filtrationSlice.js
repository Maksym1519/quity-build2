import { createSlice } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { asicInfo } from "../shopCatalogSlice";
import { useState, useEffect } from "react";

const initialState = {
  presence: null,
  filteredArray: null,
  new: null,
  used: null,
};

const filtrationSlice = createSlice({
  name: "filtration",
  initialState,
  reducers: {
    setPresence: (state, action) => {
      state.presence = action.payload;
    },
    setNew: (state, action) => {
      state.new = action.payload;
    },
    setUsed: (state, action) => {
      state.used = action.payload;
    },
    setFilteredArray: (state, action) => {
      state.filteredArray = action.payload;
    },
  },
});

export const { setPresence, setFilteredArray, setNew, setUsed } =
  filtrationSlice.actions;
export const presenceInfo = (state) => state.filtration.presence;
export const presenceArrayInfo = (state) => state.filtration.filteredArray;
export const newInfo = (state) => state.filtration.new;
export const usedInfo = (state) => state.filtration.used;

export default filtrationSlice.reducer;

//filtration--------------------------------------------------------------

export const FiltrationPresenceData = () => {
  const [asicInfoServer, setAsicInfoServer] = useState();
  const [filterPresence, setFilterPresence] = useState();
  const [filterNew, setFilterNew] = useState();
  const [filterUsed, setFilterUsed] = useState();

  const dispatch = useAppDispatch();

  const dataFromRedux = useAppSelector(asicInfo);
  const dataFromFilter = useAppSelector(presenceInfo);
  const newFromFilter = useAppSelector(newInfo);
  const usedFromFilter = useAppSelector(usedInfo);
console.log(usedFromFilter)
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
  useEffect(() => {
    if (newFromFilter && newFromFilter !== false) {
      setFilterNew(newFromFilter);
    }
  }, [newFromFilter]);
  useEffect(() => {
    if (usedFromFilter && usedFromFilter !== false) {
      setFilterUsed(usedFromFilter);
    }
  }, [usedFromFilter]);

  //-------------------------------------------------------------------
  useEffect(() => {
    try {
      const filteredArray = asicInfoServer.filter(
        (item) =>
          item.attributes.presence === dataFromFilter ||
          item.attributes.condition === newFromFilter ||
          item.attributes.condition === usedFromFilter
      );
      console.log(filteredArray);
      dispatch(setFilteredArray(filteredArray));
    } catch (error) {
      console.error("filter data is failed", error);
    }
  }, [dataFromFilter, newFromFilter, asicInfoServer]);
};
