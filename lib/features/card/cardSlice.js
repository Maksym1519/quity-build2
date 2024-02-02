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
    //------------------------------------------------------------
    addToBucket: (state, action) => {
      const userId = localStorage.getItem("id");
      const payloadArray = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      const existingUserBucket = state.bucketGoods.find(
        (userBucket) => userBucket.id === userId
      );

      if (existingUserBucket) {
        payloadArray.forEach((item) => {
          const existingItem = existingUserBucket.userGoods.find(
            (bucketItem) => bucketItem.id === item.id
          );

          if (existingItem) {
            existingItem.quantity +=
              action.payload.counter > 0 ? action.payload.counter : -1;

            if (existingItem.quantity <= 0) {
              existingUserBucket.userGoods =
                existingUserBucket.userGoods.filter(
                  (item) => item.id !== existingItem.id
                );
            } else {
              const price =
                Number(existingItem.attributes.price.replace(/\s/g, "")) || 0;
              existingItem.totalPrice = price * existingItem.quantity;
            }
          } else {
            const price = Number(item.attributes.price.replace(/\s/g, "")) || 0;
            const newItem = { ...item, quantity: 1, totalPrice: price };
            existingUserBucket.userGoods.push(newItem);
          }
        });
      } else {
        const newUserBucket = {
          id: userId,
          userGoods: payloadArray.map((item) => ({
            ...item,
            quantity: 1,
            totalPrice: Number(item.attributes.price.replace(/\s/g, "")) || 0,
          })),
        };
        state.bucketGoods.push(newUserBucket);
      }

      // Обновляем общую сумму
      const totalSum = state.bucketGoods.reduce(
        (total, userBucket) =>
          total +
          userBucket.userGoods.reduce(
            (userTotal, item) => userTotal + (item.totalPrice || 0),
            0
          ),
        0
      );

      state.sum = totalSum;
    },

    //-------------------------------------------------------------------
    updateSum: (state, action) => {
      console.log("Updated sum:", action.payload);
      state.sum = action.payload;
    },

    removeFromBucket: (state, action) => {
      const itemIdToRemove = action.payload.id;
      const userId = localStorage.getItem("id");
      const userBucket = state.bucketGoods.find(
        (userBucket) => userBucket.id === userId
      );

      if (userBucket) {
        userBucket.userGoods = userBucket.userGoods.filter(
          (item) => item && item.id !== itemIdToRemove
        );
      }
    },

    setClickBucket: (state, action) => {
      state.clickBucket = action.payload;
    },
    increaseCounter: (state) => {
      state.counter += 1;
    },
    decreaseCounter: (state) => {
      state.counter -= 1;
    },

    updateBucket: (state, action) => {
      const { userId, itemId, quantity } = action.payload;

      const updatedBucketGoods = state.bucketGoods.map((userBucket) => {
        if (userBucket.id === userId) {
          const updatedUserGoods = userBucket.userGoods.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          );

          return {
            ...userBucket,
            userGoods: updatedUserGoods,
          };
        }
        return userBucket;
      });

      return {
        ...state,
        bucketGoods: updatedBucketGoods,
      };
    },

    //--------------------------------------------------------------------------
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
  updateBucket,
  setUserId,
  setUserCart,
} = cardSlice.actions;
export const cardInfo = (state) => state.card.cardState;
export const bucketInfo = (state) => state.card.bucket;
export const clickBucketInfo = (state) => state.card.clickBucket;
export const bucketLengthInfo = (state) => state.card.bucketGoods;
export const counterInfo = (state) => state.card.counter;
export const sumInfo = (state) => state.card.sum;
export default cardSlice.reducer;
