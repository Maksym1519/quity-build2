"use client";
import o from "./orderStorage.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { orderInfo } from "@/lib/features/order/orderSlice";
import { useEffect, useState } from "react";
import OrderPopup from "./orderPopup";
import { setOverlay } from "@/lib/features/order/orderSlice";
import { overlayInfo } from "@/lib/features/order/orderSlice";
import { paidInfo } from "@/lib/features/order/orderSlice";
import { setPaid } from "@/lib/features/order/orderSlice";
import { setOrderPaid } from "@/lib/features/order/orderSlice";
import { clearOrders } from "@/lib/features/order/orderSlice";
import { setUserId } from "@/lib/features/order/orderSlice";

const OrdersStorage = () => {
  const currentUserId = localStorage.getItem("id");
  const dispatch = useAppDispatch();
  useEffect(() => {
    // Обновить userId в Redux, когда currentUserId изменяется
    dispatch(setUserId(currentUserId));
  }, [currentUserId, dispatch]);

  const orderRedux = useAppSelector(orderInfo);
    
  const filteredCurrentArray = orderRedux.filter((item) => item !== null);

  const uniqueOrders = (orders) => {
    const uniqueIds = new Set();
    return orders.filter((order) => {
      if (order.id && !uniqueIds.has(order.id)) {
        uniqueIds.add(order.id);
        return true;
      }
      return false;
    });
  };
  
  const currentFilteredOrders = uniqueOrders(filteredCurrentArray.filter((order) => order.userId === currentUserId ));
 console.log(filteredCurrentArray)
  //status---------------------------------------------------
  const [notPaid, setNotPaid] = useState(true);

  //popup--------------------------------------------------------
  const [popup, setPopup] = useState(false);
  const togglePopup = () => {
    setPopup(!popup);
  };
  
  const clickOverlay = () => {
    dispatch(setOverlay(!overlayInfo));
    };
   

  //paid-----------------------------------------------
  const [paidStyle, setPaidStyle] = useState(false);
  const pay = useAppSelector(paidInfo);
    useEffect(() => {
    if (pay) {
      setPaidStyle(pay);
    }
  }, [pay]);
  const orderInfoRedux = useAppSelector(orderInfo);
  const isAnyOrderPaid = orderInfoRedux.some(order => order.paid);
  //clear--------------------------------------------------------------
  const clearData = () => {
    dispatch(clearOrders())
  }
  //---------------------------------------------------------------
  const [selectedItemId, setSelectedItemId] = useState(null); 
  console.log(selectedItemId)
const clickPayButton = (id) => {
  setSelectedItemId(id); 
};

const clickPaid = () => {
  if (selectedItemId !== null) {
    dispatch(setOrderPaid({ id: selectedItemId, paid: true }));
  }
}
const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  
  
  
  return (
    <div className={o.content__wrapper}>
      <h3 className={o.mainTitle}>Мои заказы</h3>
      <div className={o.phone__wrapper}>
        <Image
          src={Icones.attentionTriangle}
          width={24}
          height={24}
          className={o.attentionImg}
        />
        <div className={o.phone__body}>
          <p className={o.text}>
            Если вы хотите отменить заказ или изменить условия доставки,
            свяжитесь с нашим менеджером по телефону
          </p>
          <span className={o.phoneNumber}>+38 (097) 123 45 67</span>
        </div>
      </div>
      <main className={o.orders__wrapper}>
        <div className={o.ordersHeader}>
          <div className={o.image}></div>
          <div className={o.model}>Модель</div>
          <div className={o.price}>Стоимость</div>
          <div className={o.status}>Статус</div>
          <div className={o.pay}></div>
        </div>
        {/* //--------------------------------------------------------------------- */}
        {currentFilteredOrders  && 
          currentFilteredOrders.map((item, index) => (
            <div className={o.good__wrapper} key={index}>
              <div className={o.image}>
                <Image
                  src={
                    currentFilteredOrders &&
                    item.attributes.itemImage.data.attributes.url
                  }
                  width={87}
                  height={80}
                />
              </div>
              <div className={o.model}>
                <h4 className={o.goodTile}>
                  {item.attributes && item.attributes.title}
                </h4>
                <div className={o.features__wrapper}>
                  <div className={o.feature}>
                    <span className={o.featureNum}>
                      {item.attributes && item.attributes.ths}
                    </span>
                    <span className={o.featureDescription}>TH/s</span>
                  </div>
                  <div className={o.feature}>
                    <span className={o.featureNum}>
                      {item.attributes && item.attributes.w}
                    </span>
                    <span className={o.featureDescription}>W</span>
                  </div>
                  <div className={o.feature}>
                    <span className={o.featureNum}>
                      {item.attributes && item.attributes.jth}
                    </span>
                    <span className={o.featureDescription}>J/TH</span>
                  </div>
                </div>
              </div>
              <div className={o.price} onClick={clearData}>
                <div className={o.numbersWrapper}>
                  {item.attributes && item.attributes.price}
                  <span className={o.priceSign}>$</span>
                </div>
                <div className={o.totalPrice}>
                  {item.attributes && item.quantity}
                  <span>*</span>
                  {item.attributes && item.attributes.price}
                  <span>$</span>
                </div>
              </div>
              <div
                className={
                 item.paid === true ? o.statusPaid : o.statusNotPaid
                }
              >
                {item.paid ? "оплачено" : "не оплачено"}
              </div>
{item.paid !== true &&
              <div
                className={o.pay}
                onClick={async () => {
                 await clickPayButton(item.id)
                  togglePopup();
                  clickOverlay();
                  }}
              >
                {notPaid && "оплатить"}
              </div>
}
            </div>
          ))}

        {/* //--------------------------------------------------------------------- */}
      </main>
      {popup && (
        <OrderPopup
          hidePopup={togglePopup}
          hideOverlay={clickOverlay}
          clickPaid={clickPaid}
        />
      )}
    </div>
  );
};
export default OrdersStorage;
