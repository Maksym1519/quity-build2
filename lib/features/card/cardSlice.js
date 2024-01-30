import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: "catalog",
    currentFeature: "additionalFeatures",
    order: null,
    cardState: null,
    bucket: false,
    bucketGoods: [],
    clickBucket: false
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
            const payloadArray = Array.isArray(action.payload) ? action.payload : [action.payload];
            state.bucketGoods = [...state.bucketGoods, ...payloadArray];
          },
          removeFromBucket: (state, action) => {
            const itemIdToRemove = action.payload.id;
            state.bucketGoods = state.bucketGoods.filter(item => item && item.id !== itemIdToRemove);
          },
          setClickBucket: (state, action) => {
            state.clickBucket = action.payload
          }
          }
})
export const {setInfo,setCard,setCatalog,setAdditionalFeatures,setPayment,setFeedback,setDataBucket,addToBucket,removeFromBucket,setClickBucket} = cardSlice.actions;
export const cardInfo = (state) => state.card.cardState;
export const bucketInfo = (state) => state.card.bucket;
export const clickBucketInfo = (state) => state.card.clickBucket
export default cardSlice.reducer