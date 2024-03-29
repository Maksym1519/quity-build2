import c from "./coupon.module.scss";
import Image from "next/image";
import { CouponImages } from "@/public/Data";
import Link from "next/link";

const Coupon = () => {
  return (
    <div className={c.wrapper}>
      <h3 className={c.title}>Заберите купон на скидку хостинга</h3>
      <div className={c.coupon__body}>
        <Image
          src={CouponImages.yellowBg}
          width={1280}
          height={320}
          className={c.yellowBg}
          alt="icon"
        />
        <Image
          src={CouponImages.blueBg}
          width={850}
          height={320}
          className={c.blueBg}
          alt="icon"
        />
        <Image
          src={CouponImages.discount}
          width={554}
          height={272}
          className={c.discount}
          alt="icon"
        />
        <div className={c.info__body}>
          <h4 className={c.infoTitle}>
            Скидка 10% на размешение и годовое обслуживания на хостинге Quity
          </h4>
          <p className={c.infoText}>
            Скидка на хостинг рассчитывается автоматически в корзине
          </p>
          <Link href="/catalog">
            <button type="button" className={c.infoButton}>
              Выбрать майнер
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Coupon;
