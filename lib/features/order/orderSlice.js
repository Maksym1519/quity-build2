import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    userId: null
   }

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrder: (state,action) => {
            state.orders.push(...action.payload.map((order) => ({...order, userId: state.userId})))
        },
        setUserId: (state,action) => {
            state.userId = action.payload
        }
        }
})
export const {setOrder,setUserId} = orderSlice.actions;
export const orderInfo = (state) => state.order.orders;
export default orderSlice.reducer