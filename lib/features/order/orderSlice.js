import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    orders: [],
    userId: null,
    overlay: false,
    //paid: false,
    index: [],
    activeState: ""
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
                paidHosting: false
                }))
            );
          },
          setOrderPaid: (state, action) => {
            const { id, paid } = action.payload;
            const orderToUpdate = state.orders.find(order => order.id === id);
            if (orderToUpdate) {
              orderToUpdate.paid = paid;
            }
          },
          setPaidHosting: (state, action) => {
            const { id, status } = action.payload;
            const orderToUpdate = state.orders.find(order => order.id === id);
            if (orderToUpdate) {
              orderToUpdate.status = status;
            }
          },
          setOffHosting: (state, action) => {
            const { id, status } = action.payload;
            const orderToUpdate = state.orders.find(order => order.id === id);
            if (orderToUpdate) {
              orderToUpdate.status = status;
            }
          },
          setActiveState: (state, action) => {
            state.activeState = action.payload
          },
                
         setUserId: (state,action) => {
            state.userId = action.payload
        },
        setOverlay: (state,action) => {
            state.overlay = !state.overlay
        },
        // setPaid: (state,action) => {
        //     state.paid = !state.paid
        // },
        clearOrders: (state) => {
          state.orders = [];
      },
        }
})
export const {setOrder,setUserId,setOverlay,setPaid,setOrderPaid,clearOrders,setPaidHosting,setOffHosting,setActiveState} = orderSlice.actions;
export const orderInfo = (state) => state.order.orders;
export const overlayInfo = (state) => state.order.overlay;
export const paidInfo = (state) => state.order.paid;
export const indexInfo = (state) => state.order.index;
export default orderSlice.reducer