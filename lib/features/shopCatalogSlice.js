import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import axios from "axios";

const initialState = {
  currentComponent: "asicCatalog",
  asicState: null,
  gpuState: null,
  hardDiscState: null,
  farmState: null,
  spareState: null
};

const shopCatalogSlice = createSlice({
  name: "shopCatalog",
  initialState,
  reducers: {
    asicCatalog: (state) => {
      state.currentComponent = "asicCatalog";
    },
    gpuCatalog: (state) => {
      state.currentComponent = "gpuCatalog";
    },
    hardCatalog: (state) => {
      state.currentComponent = "hardCatalog";
    },
    farmCatalog: (state) => {
      state.currentComponent = "farmCatalog";
    },
    spareCatalog: (state) => {
      state.currentComponent = "spareCatalog";
    },
    findingCatalog: (state) => {
      state.currentComponent = "findingCatalog";
    },
    setAsicInfo: (state, action) => {
      state.asicState = action.payload;
    },
    setGpuInfo: (state, action) => {
      state.gpuState = action.payload;
    },
    setHardDiscInfo: (state, action) => {
      state.hardDiscState = action.payload;
    },
    setFarmInfo: (state, action) => {
      state.farmState = action.payload;
    },
    setSpareInfo: (state, action) => {
      state.spareState = action.payload;
    },
  },
});
export const {
  asicCatalog,
  gpuCatalog,
  hardCatalog,
  farmCatalog,
  spareCatalog,
  findingCatalog,
  setAsicInfo,
  setGpuInfo,
  setHardDiscInfo,
  setFarmInfo,
  setSpareInfo
} = shopCatalogSlice.actions;
export const asicInfo = (state) => state.shopCatalog.asicState;
export const gpuInfo = (state) => state.shopCatalog.gpuState;
export const hardDiscInfo = (state) => state.shopCatalog.hardDiscState;
export const farmInfo = (state) => state.shopCatalog.farmState;
export const spareInfo = (state) => state.shopCatalog.spareState;
export default shopCatalogSlice.reducer;

export const AsicData = () => {
  const [asic, setAsic] = useState([]);
  const [asicImages, setAsicImages] = useState([]);
  const dispatch = useAppDispatch();
  dispatch(setAsicInfo(asic));

  async function getAsicInfo() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/catalog-items?populate=*"
      );
      const dataResponse = response.data.data;
      const dataResponseImages = dataResponse.map(
        (item) => item.attributes.goodImage.data.attributes.url
      );
      if (dataResponseImages) {
        setAsic(dataResponse);
        setAsicImages(dataResponseImages);
      }
    } catch (error) {
      console.error("get asic info is failed");
    }
  }
  useEffect(() => {
    getAsicInfo();
  }, []);
};
export const GpuData = () => {
  const [gpu, setGpu] = useState([]);
  const dispatch = useAppDispatch();
  dispatch(setGpuInfo(gpu));

  async function getGpuInfo() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/catalog-gpus?populate=*"
      );
      const dataResponse = response.data.data;
      setGpu(dataResponse);
    } catch (error) {
      console.error("get gpu info is failed");
    }
  }
  useEffect(() => {
    getGpuInfo();
  }, []);
};
export const HardDiscData = () => {
  const [hardDisc, setHardDisc] = useState([]);
  const dispatch = useAppDispatch();
  dispatch(setHardDiscInfo(hardDisc));

  async function getHardDiscInfo() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/catalog-hards?populate=*"
      );
      const dataResponse = response.data.data;
      setHardDisc(dataResponse);
    } catch (error) {
      console.error("get hardDiscs info is failed");
    }
  }
  useEffect(() => {
    getHardDiscInfo();
  }, []);
};
export const FarmData = () => {
  const [farm, setFarm] = useState([]);
  const dispatch = useAppDispatch();
  dispatch(setFarmInfo(farm));

  async function getFarmInfo() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/catalog-farms?populate=*"
      );
      const dataResponse = response.data.data;
      setFarm(dataResponse);
    } catch (error) {
      console.error("get farms info is failed");
    }
  }
  useEffect(() => {
    getFarmInfo();
  }, []);
};

export const SpareData = () => {
  const [spare, setSpare] = useState([]);
  const dispatch = useAppDispatch();
  dispatch(setSpareInfo(spare));

  async function getSpareInfo() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/catalog-spares?populate=*"
      );
      const dataResponse = response.data.data;
      setSpare(dataResponse);
    } catch (error) {
      console.error("get spares info is failed");
    }
  }
  useEffect(() => {
    getSpareInfo();
  }, []);
};
