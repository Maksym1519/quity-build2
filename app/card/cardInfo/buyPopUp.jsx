import b from "./buyPopUp.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";

const BuyPopUp = (props) => {
    return (
        <div className={b.buyPopUp__wrapper}>
<div className={b.buyPopUp__body}>
            <p className={b.text}>Ваш заказ приянят и будет обработан в ближайшее время</p>
            <p className={b.textInfo}>Результат и статус заказа смотрите в <span>Мои заказы</span></p>
            <Image src={Icones.close} width={24} height={24} className={b.close} onClick={props.closePopup}/>
</div>
        </div>
    )
}
export default BuyPopUp;