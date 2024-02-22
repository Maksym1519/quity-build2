import t from "./title.module.scss";
import Button from "@/app/components/buttons/Button";
import Link from "next/link";

const Title = () => {
  return (
    <div className={t.wrapper}>
      <h2 className={t.mainTitle}>Панель управления</h2>
      <Link href={"/orders"}>
        <Button text={"Добавить устройство"} />
      </Link>
    </div>
  );
};
export default Title;
