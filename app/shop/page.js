import s from "./shop.module.scss";
//components------------------------------------
import Miners from "./miners/miners";

export default function Shop() {
  return (
    <div className={s.wrapper}>
<div className="container">
      <Miners />
</div>
    </div>
  );
}
