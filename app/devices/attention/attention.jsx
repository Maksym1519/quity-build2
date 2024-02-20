import a from "./attention.module.scss";
import Icones from "@/public/Data";
import Image from "next/image";
import WhiteButton from "@/app/components/buttons/whiteButton";
import Link from "next/link";

const Attention = () => {
  return (
    <div className={a.wrapper}>
      <div className={a.attention__wrapper}>
        <Image src={Icones.attentionTriangle} width={24} height={24} />
        <div className={a.attentionInfo}>
          <p className={a.attentionInfoTitle}>
            На Вашем оборудовании замечен низкий хешрейт
          </p>
          <p className={a.attentionInfoText}>
            Увеличьте мощности и заработок с ASIC-майнерам с хешрейтом от 50
            TH/s
          </p>
        </div>
      </div>
      <Link href={"./catalog"}>
        <WhiteButton text={"В каталог"} />
      </Link>
    </div>
  );
};
export default Attention;
