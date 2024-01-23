import { createSlice } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { asicInfo } from "../shopCatalogSlice";
import { useState, useEffect } from "react";

const initialState = {
  presence: null,
  filteredArray: null,
  new: null,
  used: null,
  price: null,
  hashRate: null,
  profit: null,
  power: null,
  maker: {
    canaan: null,
    bitmain: null,
    whatsminer: null,
    innosilicon: null,
  },
};

const filtrationSlice = createSlice({
  name: "filtration",
  initialState,
  reducers: {
    setFilteredArray: (state, action) => {
      state.filteredArray = action.payload;
    },
    setPresence: (state, action) => {
      state.presence = action.payload;
    },
    setNew: (state, action) => {
      state.new = action.payload;
    },
    setUsed: (state, action) => {
      state.used = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setHashRate: (state, action) => {
      state.hashRate = action.payload
    },
    setProfit: (state, action) => {
      state.profit = action.payload
    },
    setPower: (state, action) => {
      state.power = action.payload
    },
    setMaker: (state, action) => {
      state.maker = action.payload
    }
  },
});

export const { setPresence, setFilteredArray, setNew, setUsed, setPrice, setHashRate, setProfit, setPower, setMaker } =
  filtrationSlice.actions;
export const presenceInfo = (state) => state.filtration.presence;
export const presenceArrayInfo = (state) => state.filtration.filteredArray;
export const newInfo = (state) => state.filtration.new;
export const usedInfo = (state) => state.filtration.used;
export const priceInfo = (state) => state.filtration.price;
export const hashRateInfo = (state) => state.filtration.hashRate
export const profitInfo = (state) => state.filtration.profit
export const powerInfo = (state) => state.filtration.power
export const makerInfo = (state) => state.filtration.maker

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
  const priceFromFilter = useAppSelector(priceInfo);
  const hashRateFromFilter = useAppSelector(hashRateInfo);
  const profitFromFilter = useAppSelector(profitInfo);
  const powerFromFilter = useAppSelector(powerInfo);
  const makerFromFilter = useAppSelector(makerInfo);
    console.log(makerFromFilter)
  useEffect(() => {
    if (dataFromRedux && dataFromRedux !== null) {
      setAsicInfoServer(dataFromRedux);
    }
  }, [dataFromRedux]);
  // useEffect(() => {
  //   if (dataFromFilter && dataFromFilter !== false) {
  //     setFilterPresence(dataFromFilter);
  //   }
  // }, [dataFromFilter]);
  // useEffect(() => {
  //   if (newFromFilter && newFromFilter !== false) {
  //     setFilterNew(newFromFilter);
  //   }
  // }, [newFromFilter]);
  // useEffect(() => {
  //   if (usedFromFilter && usedFromFilter !== false) {
  //     setFilterUsed(usedFromFilter);
  //   }
  // }, [usedFromFilter]);

  //-------------------------------------------------------------------
  useEffect(() => {
    try {
      let filteredArray = asicInfoServer;
      // Фильтрация по наличию
      if (dataFromFilter !== null) {
        filteredArray = filteredArray.filter(
          (item) => item.attributes.presence === dataFromFilter
        );
      }
      // Фильтрация по состоянию "новый"
      if (newFromFilter !== null) {
        filteredArray = filteredArray.filter(
          (item) => item.attributes.condition === newFromFilter
        );
      }
      // Фильтрация по состоянию "подержанный"
      if (usedFromFilter !== null) {
        filteredArray = filteredArray.filter(
          (item) => item.attributes.condition === usedFromFilter
        );
      }
      // Фильтрация по цене
      const priceRange = priceFromFilter.map(parseFloat);
      if (!isNaN(priceRange[0] && !isNaN(priceRange[1]))) {
        filteredArray = filteredArray.filter((item) => {
          const itemPrice = parseFloat(
            item.attributes.price.replace(/\s/g, "")
          );
          return itemPrice >= priceRange[0] && itemPrice <= priceRange[1];
        });
      }
      // Фильтрация по hashRate/Th/s
      if (hashRateFromFilter !== null) {
        filteredArray = filteredArray.filter(
          (item) => item.attributes.ths >= hashRateFromFilter[0] && item.attributes.ths <= hashRateFromFilter[1]
        );
      }
      // Фильтрация по доходности
      if (profitFromFilter !== null) {
        filteredArray = filteredArray.filter(
          (item) => item.attributes.profit >= profitFromFilter[0] && item.attributes.profit <= profitFromFilter[1]
        );
      }
      // Фильтрация по энергопотреблению
      if (powerFromFilter !== null) {
        filteredArray = filteredArray.filter(
          (item) => item.attributes.w >= powerFromFilter[0] && item.attributes.w <= powerFromFilter[1]
        );
      }
      // Фильтрация по производителю
      if (makerFromFilter && makerFromFilter.length > 0) {
        filteredArray = filteredArray.filter((item) =>
          makerFromFilter.includes(item.attributes.maker)
        );
      }
      dispatch(setFilteredArray(filteredArray));
    } catch (error) {
      console.error("Filtering data failed", error);
    }
  }, [
    dataFromFilter,
    newFromFilter,
    usedFromFilter,
    priceFromFilter,
    hashRateFromFilter,
    profitFromFilter,
    powerFromFilter,
    makerFromFilter,
    asicInfoServer,
  ]);
};
