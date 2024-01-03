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
        },
        findingCatalog: (state) => {
            state.currentComponent = "findingCatalog"
        }
    }
})
export const {asicCatalog, gpuCatalog, hardCatalog, findingCatalog} = shopCatalogSlice.actions;
export default shopCatalogSlice.reducer