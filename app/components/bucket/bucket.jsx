import b from "./bucket.module.scss";
import Link from "next/link";
import Image from "next/image";
import Icones from "@/public/Data";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { cardInfo } from "@/lib/features/card/cardSlice";
import { addToBucket } from "@/lib/features/card/cardSlice";
import { removeFromBucket } from "@/lib/features/card/cardSlice";
import { orderReduxInfo } from "@/lib/features/card/cardSlice";
import { clickBucketInfo } from "@/lib/features/card/cardSlice";
import { setClickBucket } from "@/lib/features/card/cardSlice";
import { setBucketLength } from "@/lib/features/card/cardSlice";
import { bucketLengthInfo } from "@/lib/features/card/cardSlice";
import { getUpdatedCart } from "@/app/card/differentBucket/getUpdatedCart";
import {
  increaseCounter,
  decreaseCounter,
  updateSum,
  counterInfo,
  sumInfo,
  updateBucket,
} from "@/lib/features/card/cardSlice";
import { selectData } from "@/lib/features/getIdSlice";
import { setOrder } from "@/lib/features/order/orderSlice";
import { setUserId } from "@/lib/features/order/orderSlice";

const Bucket = () => {
  const [orderBucket, setOrderBucket] = useState(true);
  const clickReduxBucket = () => {
    setOrderBucket(false);
  };
  //get-data-from-card-redux----------------------------------
  const [arrayGoods, setArrayGoods] = useState([]);
  const orderReduxInfo = useAppSelector(cardInfo);
  const clickBucket = useAppSelector(clickBucketInfo);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (clickBucket === true) {
      const payloadArray = Array.isArray(orderReduxInfo)
        ? orderReduxInfo
        : [orderReduxInfo];
      setArrayGoods(payloadArray);
      dispatch(setClickBucket(false));
    }
  }, [orderReduxInfo]);

  useEffect(() => {
    if (arrayGoods.length > 0) {
      dispatch(addToBucket(arrayGoods));
    }
  }, [arrayGoods, dispatch]);

  const currentArray = useAppSelector((state) => state.card.bucketGoods);
  const currentUserId = localStorage.getItem("id");

  // Фильтрация  null
  const filteredCurrentArray = currentArray.filter((item) => item !== null);

  // Уникальные корзины для разных пользователей
  const uniqueUserBuckets = Array.from(
    new Set(filteredCurrentArray.map((userBucket) => userBucket.id))
  ).map((userId) => {
    return filteredCurrentArray.find((userBucket) => userBucket.id === userId);
  });

  const filteredUserBuckets = uniqueUserBuckets.filter(
    (userBucket) => userBucket !== null
  );
  const currentUserBucket = filteredUserBuckets.find(
    (userBucket) => userBucket.id === currentUserId
  );
  console.log(currentArray);
  //set-sum-------------------------------------
  const counter = useAppSelector(counterInfo);
  const sum = useAppSelector(sumInfo);

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseCounter());
    dispatch(
      updateBucket({
        userId: currentUserId,
        itemId: item.id,
        quantity: item.quantity + 1,
      })
    );
    dispatch(updateSum());
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseCounter());
    dispatch(
      updateBucket({
        userId: currentUserId,
        itemId: item.id,
        quantity: item.quantity - 1,
      })
    );
    dispatch(updateSum());
  };
  //remove--------------------------------------------------------
  const handleRemoveItem = (item) => {
    dispatch(removeFromBucket(item));
  };
  //setSum---------------------------------------------------------------
  useEffect(() => {
    dispatch(updateSum());
  }, [currentArray]);
  //setOrder---------------------------------------------------------------
  const clickSetOrder = (userBucket) => {
    if (userBucket && userBucket !== undefined && currentUserBucket.id !== null)
      dispatch(setOrder(userBucket.userGoods));
    dispatch(setUserId(currentUserBucket.id));
  };

  return (
    <>
      {orderBucket && (
        <div className={b.bucket__wrapper}>
          <div className={b.bucket__body}>
            <h3 className={b.mainTitle}>Корзина</h3>
            {currentUserBucket &&
              currentUserBucket.userGoods.map((item, index) => (
                <div className={b.orderItem} key={index}>
                  <div className={b.orderItemInfo}>
                    <span className={b.goodTitle}>
                      {item.attributes ? item.attributes.title : ""}
                    </span>
                    <div
                      className={b.orderButtonDelete}
                      onClick={() => handleRemoveItem(item)}
                    >
                      Удалить
                    </div>
                  </div>
                  <div className={b.orderItemPrice}>
                    <div className={b.counterButtons}>
                      <div
                        className={b.buttonOperation}
                        onClick={() =>
                          item.quantity >= 2 && handleDecreaseQuantity(item)
                        }
                      >
                        -
                      </div>

                      <div className={b.counterButtonsValue}>
                        <span>{item.quantity}</span>
                        <span>шт</span>
                      </div>
                      <div
                        className={b.buttonOperation}
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        +
                      </div>
                    </div>
                    <Link href={"/orders"}>
                      <div
                        className={b.orderButton}
                        onClick={() => clickSetOrder(currentUserBucket)}
                      >
                        Оформить
                      </div>
                    </Link>
                  </div>
                  <span className={b.price}>
                    Итого: {parseFloat(item.totalPrice * item.quantity)}$
                  </span>
                </div>
              ))}
            <Image
              src={Icones.close}
              width={24}
              height={24}
              className={b.close}
              onClick={() => clickReduxBucket()}
            />
          </div>
          {currentUserBucket && currentUserBucket.userGoods.length === 0 && (
            <div className={b.emptyInfo}>Корзина пуста</div>
          )}
        </div>
      )}
    </>
  );
};
export default Bucket;
