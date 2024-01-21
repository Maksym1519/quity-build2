import { createSlice } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { asicInfo } from "../shopCatalogSlice";
import { useState, useEffect } from "react";

const initialState = {
  presence: false,
  filteredArray: null,
  new: false
  };

const filtrationSlice = createSlice({
  name: "filtration",
  initialState,
  reducers: {
    setPresence: (state, action) => {
      state.presence = action.payload;
    },
    setNew: (state,action) => {
      state.new = action.payload
    },
    setFilteredArray: (state,action) => {
      state.filteredArray = action.payload
    },
    },
});

export const { setPresence,setFilteredArray,setNew } = filtrationSlice.actions;
export const presenceInfo = (state) => state.filtration.presence;
export const presenceArrayInfo = (state) => state.filtration.filteredArray;
export const newInfo = (state) => state.filtration.new;

export default filtrationSlice.reducer;

//filtration--------------------------------------------------------------

export const FiltrationPresenceData = () => {
  const [asicInfoServer, setAsicInfoServer] = useState();
  const [filterPresence, setFilterPresence] = useState();
  const [filterNew, setFilterNew] = useState();
  
  const dispatch = useAppDispatch()

  const dataFromRedux = useAppSelector(asicInfo);
  const dataFromFilter = useAppSelector(presenceInfo);
  const newFromFilter = useAppSelector(newInfo)
  
  console.log(dataFromFilter)
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
  
  //-------------------------------------------------------------------
  useEffect(() => {
  try {
    if (filterPresence && filterPresence !== false && filterNew && filterNew !== false) {
      const combinedArray = asicInfoServer.filter(
        (item) =>
          item.attributes.presence === "В наличии" &&
          item.attributes.condition === "new"
      );
      dispatch(setFilteredArray(combinedArray));
      console.log(combinedArray);
    } else if (filterPresence && filterPresence !== false) {
      const filteredArray = asicInfoServer.filter(
        (item) => item.attributes.presence === "В наличии"
      );
      dispatch(setFilteredArray(filteredArray));
      console.log(filteredArray);
    } else if (filterNew && filterNew !== false) {
      const newFilteredArray = asicInfoServer.filter(
        (item) => item.attributes.condition === "new"
      );
      dispatch(setFilteredArray(newFilteredArray));
      console.log(newFilteredArray);
    } else {
      // Если ни один из фильтров не активен
      // Сбросьте отфильтрованный массив в null или весь исходный массив
      dispatch(setFilteredArray(null)); // ИЛИ dispatch(setFilteredArray(asicInfoServer));
    }
  } catch (error) {
    console.error("filter data is failed", error);
  }
}, [filterPresence, filterNew, asicInfoServer]);

  
};
