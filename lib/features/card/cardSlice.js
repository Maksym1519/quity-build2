import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: "catalog",
    currentFeature: "additionalFeatures",
    order: null,
    cardState: null,
    bucket: false,
    bucketGoods: []
}

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        setCatalog: (state) => {
          state.currentComponent = "catalog"
        },
        setCard: (state) => {
            state.currentComponent = "card"
        },
        setInfo: (state,action) => {
            state.cardState = action.payload
        },
        setAdditionalFeatures: (state) => {
            state.currentFeature = "additionalFeatures"
        },
        setPayment: (state) => {
            state.currentFeature = "payment"
        },
        setFeedback: (state) => {
            state.currentFeature = "feedback"
        },
        setDataBucket: (state, action) => {
            state.bucket = action.payload
        },
        addToBucket: (state, action) => {
            state.bucketGoods = [...state.bucketGoods, ...action.payload];
          },
    }
})
export const {setInfo,setCard,setCatalog,setAdditionalFeatures,setPayment,setFeedback,setDataBucket,addToBucket} = cardSlice.actions;
export const cardInfo = (state) => state.card.cardState;
export const bucketInfo = (state) => state.card.bucket;
export default cardSlice.reducer