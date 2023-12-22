import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: "asicCatalog"
}

const shopCatalogSlice = createSlice({
    name: "shopCatalog",
    initialState,
    reducers: {
        asicCatalog: (state) => {
            state.currentComponent = "asicCatalog"
        },
        gpuCatalog: (state) => {
            state.currentComponent = "gpuCatalog"
        },
        hardCatalog: (state) => {
            state.currentComponent = "hardCatalog"
        }
    }
})
export const {asicCatalog, gpuCatalog, hardCatalog} = shopCatalogSlice.actions;
export default shopCatalogSlice.reducer