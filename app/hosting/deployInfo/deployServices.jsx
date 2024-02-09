import d from "./deployInfo.module.scss";
import Image from "next/image";
import { Hosting } from "@/public/Data";

const DeployServices = () => {
    const content = {
        "Новейшее оборудование от компании General Electric": "Мощные генераторы для постоянной подачи электроэнергии за 3,7 КВтч, оборудование для обеспечения энергии в аварийной ситуации",
        "Техническое обслуживание 24/7":"Ваше оборудование всегда находится под контролем инженеров, мы организуем быстрый ремонт с заменой деталей и бесплатным восстановлением ПО",
        "Контроль температуры и система пожаротушения":"На объекте установлена новейшая система газового пожаротушения моментального реагирования, поддерживается стабильная температура 30-35 градусов",
        "Стабильный интернет и ап-тайм 100%":"Обеспечиваем бесперебойную работу оборудования 24/7, Ваши устройства не простаивают, не теряют характеристики из-за постоянных отключений"
    };

    return (
        <div className={d.deployServices__wrapper}>
            {Object.entries(content).map(([title, text], index) => (
                <div className={d.item} key={index}>
                    <Image src={Hosting.serviceIcon} width={88} height={88}/>
                    <div className={d.itemInfo}>
                        <p className={d.title}>{title}</p>
                        <p className={d.text}>{text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DeployServices;