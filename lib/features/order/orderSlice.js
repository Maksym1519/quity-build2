import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    orders: [],
    userId: null,
    overlay: false,
    paid: false,
    index: []
   }

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.orders.push(
              ...action.payload.map((order) => ({
                ...order,
                userId: state.userId,
                paid: false,
                }))
            );
          },
          setOrderPaid: (state, action) => {
            const { index, paid } = action.payload;
            state.orders = state.orders.map((order, i) =>
              i === index ? { ...order, paid } : order
            );
          },
         setUserId: (state,action) => {
            state.userId = action.payload
        },
        setOverlay: (state,action) => {
            state.overlay = !state.overlay
        },
        setPaid: (state,action) => {
            state.paid = !state.paid
        },
        clearOrders: (state) => {
          state.orders = [];
      },
        }
})
export const {setOrder,setUserId,setOverlay,setPaid,setOrderPaid,clearOrders} = orderSlice.actions;
export const orderInfo = (state) => state.order.orders;
export const overlayInfo = (state) => state.order.overlay;
export const paidInfo = (state) => state.order.paid;
export const indexInfo = (state) => state.order.index;
export default orderSlice.reducer