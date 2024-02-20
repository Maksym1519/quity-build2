import d from "./devicesHeader.module.scss";
import Link from "next/link";
import Button from "@/app/components/buttons/Button";

const DevicesHeader = () => {
  return (
    <div className={d.wrapper}>
      <h2 className={d.mainTitle}>Мои устройства</h2>
      <Link href={"/catalog"}>
        <Button text="Добавить устройство"/>
      </Link>
    </div>
  );
};
export default DevicesHeader;
