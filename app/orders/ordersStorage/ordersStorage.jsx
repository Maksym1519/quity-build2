"use client";
import o from "./orderStorage.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import { useAppSelector } from "@/lib/hooks";
import { orderInfo } from "@/lib/features/order/orderSlice";

const OrdersStorage = () => {
  const currentUserId = localStorage.getItem("id");
  const orderRedux = useAppSelector(orderInfo);
  const filteredCurrentArray = orderRedux.filter((item) => item !== null);
  
  const currentFilteredOrders = filteredCurrentArray.filter((order) => order.userId === currentUserId);
  
  console.log(orderRedux);
  console.log(filteredCurrentArray);
  console.log(currentFilteredOrders);
  
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
          <div className={o.good__wrapper}>
          <div className={o.image}></div>
             <div className={o.model}>
                <h4 className={o.goodTile}></h4>
                <div className={o.features__wrapper}>
                    <div className={o.feature}>
                        <span className={o.featureNum}></span>
                        <span className={o.featureDescription}></span>
                    </div>
                    <div className={o.feature}>
                    <span className={o.featureNum}></span>
                        <span className={o.featureDescription}></span>
                    </div>
                    <div className={o.feature}>
                    <span className={o.featureNum}></span>
                        <span className={o.featureDescription}></span>
                    </div>
                </div>
             </div>
             <div className={o.price}>
                <div className={o.numbersWrapper}>
                    {}
                    <span className={o.priceSign}></span>
                </div>
                <div className={o.totalPrice}>
                    <span>*</span>
                    <span>$</span>
                </div>
             </div>
             <div className={o.status}>
                {}
             </div>
             <div className={o.pay}>

             </div>
          </div>
          {/* //--------------------------------------------------------------------- */}
      </main>
    </div>
  );
};
export default OrdersStorage;
