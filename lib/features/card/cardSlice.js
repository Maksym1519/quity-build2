import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentComponent: "catalog",
  currentFeature: "additionalFeatures",
  order: null,
  cardState: null,
  bucket: false,
  bucketGoods: [],
  clickBucket: false,
  counter: 0,
  sum: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCatalog: (state) => {
      state.currentComponent = "catalog";
    },
    setCard: (state) => {
      state.currentComponent = "card";
    },
    setInfo: (state, action) => {
      state.cardState = action.payload;
    },
    setAdditionalFeatures: (state) => {
      state.currentFeature = "additionalFeatures";
    },
    setPayment: (state) => {
      state.currentFeature = "payment";
    },
    setFeedback: (state) => {
      state.currentFeature = "feedback";
    },
    setDataBucket: (state, action) => {
      state.bucket = action.payload;
    },
    addToBucket: (state, action) => {
      const payloadArray = Array.isArray(action.payload) ? action.payload : [action.payload];
      const updatedBucket = [...state.bucketGoods];
    
      payloadArray.forEach((item) => {
        const existingItem = updatedBucket.find((bucketItem) => bucketItem.id === item.id);
    
        if (existingItem) {
          existingItem.quantity = state.counter > 0 ? existingItem.quantity + state.counter : existingItem.quantity - 1;
    
          if (existingItem.quantity <= 0) {
            const indexToRemove = updatedBucket.findIndex((bucketItem) => bucketItem.id === item.id);
            updatedBucket.splice(indexToRemove, 1);
          } else {
            const price = Number(existingItem.attributes.price.replace(/\s/g, '')) || 0;
            existingItem.totalPrice = price * existingItem.quantity;
          }
        } else {
          const price = Number(item.attributes.price.replace(/\s/g, '')) || 0;
          const newItem = { ...item, quantity: 1, totalPrice: price };
          updatedBucket.push(newItem);
        }
      });
    
      // Обновляем общую сумму
      const totalSum = updatedBucket.reduce((total, item) => total + (item.totalPrice || 0), 0);
    
      state.bucketGoods = updatedBucket;
      state.sum = totalSum;
    },
    
    
    updateSum: (state,action) => {
      state.sum = action.payload
    },
    
    removeFromBucket: (state, action) => {
      const itemIdToRemove = action.payload.id;
      state.bucketGoods = state.bucketGoods.filter(
        (item) => item && item.id !== itemIdToRemove
      );
    },
    setClickBucket: (state, action) => {
      state.clickBucket = action.payload;
    },
    increaseCounter: (state) => {
      state.counter += 1;
    },
    decreaseCounter: (state) => {
      if (state.counter > 0) {
        state.counter -= 1;
      }
    },
     },
});
export const {
  setInfo,
  setCard,
  setCatalog,
  setAdditionalFeatures,
  setPayment,
  setFeedback,
  setDataBucket,
  addToBucket,
  removeFromBucket,
  setClickBucket,
  setBucketLength,
  increaseCounter,
  decreaseCounter,
  updateSum,
} = cardSlice.actions;
export const cardInfo = (state) => state.card.cardState;
export const bucketInfo = (state) => state.card.bucket;
export const clickBucketInfo = (state) => state.card.clickBucket;
export const bucketLengthInfo = (state) => state.card.bucketGoods;
export const counterInfo = (state) => state.card.counter;
export const sumInfo = (state) => state.card.sum;
export default cardSlice.reducer;
