import b from "./bucket.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { cardInfo } from "@/lib/features/card/cardSlice";

const Bucket = () => {
  const [orderBucket, setOrderBucket] = useState(true);
  const clickReduxBucket = () => {
    setOrderBucket(false);
  };
//get-data-from-card-redux----------------------------------
const [arrayGoods,setArrayGoods] = useState([])
const orderReduxInfo = useAppSelector(cardInfo)
useEffect(() => {
    if (orderReduxInfo && orderReduxInfo !== null) {
      setArrayGoods((prevArray) => [...prevArray, orderReduxInfo]);
      console.log(arrayGoods)
    }
  }, [orderReduxInfo]);
  
  return (
    <>
      {orderBucket && (
        <div className={b.bucket__wrapper}>
          <div className={b.bucket__body}>
            <h3 className={b.mainTitle}>Корзина</h3>
            {arrayGoods && arrayGoods.map((item, index) => (   <div className={b.orderItem} key={index}>
              <div className={b.orderItemInfo}>
                <span className={b.goodTitle}>
                 {item.attributes.title}
                </span>
                <div className={b.orderButton}>Оформить</div>
              </div>
              <div className={b.orderItemPrice}>
                <span className={b.price}>Цена: {item.attributes.price}$</span>
                <div className={b.orderButtonDelete}>Удалить</div>
              </div>
            </div>))}
         
            <Image
              src={Icones.close}
              width={24}
              height={24}
              className={b.close}
              onClick={() => clickReduxBucket()}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Bucket;
