//"use client";
import d from "./deployQuick.module.scss";
import useSWR from "swr";
import { quickDeploy } from "@/lib/features/hosting/quickDeploySlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { quickDeployInfo } from "@/lib/features/hosting/quickDeploySlice";
import { setInfo } from "@/lib/features/hosting/quickDeploySlice";

const fetcher = async () => {
    const response = await fetch("https://api.coinlore.net/api/tickers/")
}
const DeployQuick = () => {
  const { data, error } = useSWR(
    "quickDeploy",
    fetcher
  );
  if (error) {
    return <div>Failed to loaded</div>;
  }
  if (data) {
    return <div>Loading...</div>;
  }
  const array = data.data.data;
  // const dispatch = useAppDispatch()
  // dispatch(setInfo(data))
  // const dataFromRedux = useAppSelector(quickDeployInfo)
  console.log(data);
  return (
    <div className={d.deployQuick__wrapper}>
      <div className={d.deployQuick__body}>
        <h3 className={d.mainTitle}>
          Размещайте ASIC-майнеры <br />
          на хостинге за 1 день
        </h3>
        <p className={d.subTitle}>Как работает хостинг Quity?</p>
      </div>
    </div>
  );
};
export default DeployQuick;
