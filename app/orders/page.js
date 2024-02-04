import o from "./ordersPage.module.scss";
import OrdersStorage from "./ordersStorage/ordersStorage";

export default function Orders() {
  return (
    <div className={o.wrapper}>
      <div className="container">
        <OrdersStorage />
      </div>
    </div>
  );
}
