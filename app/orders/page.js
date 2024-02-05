"use client";
import o from "./ordersPage.module.scss";
import OrdersStorage from "./ordersStorage/ordersStorage";
import { useAppSelector } from "@/lib/hooks";
import { overlayInfo } from "@/lib/features/order/orderSlice";

export default function Orders() {
  const overlayRedux = useAppSelector(overlayInfo);
  console.log(overlayRedux)

  return (
    <div className={o.wrapper}>
         <div className="container">
            <OrdersStorage />
          </div>
          {overlayRedux && <div className={o.overlay}></div>}
        </div>
  
  );
}
