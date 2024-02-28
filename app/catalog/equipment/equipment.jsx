"use client";
import Asic from "./asic/asic";
import Gpu from "./gpu/gpu";
import HardDisc from "./hardisc/hardDisc";;
import Farm from "./farm/farm";
import Spare from "./spare/spare";
import { useAppSelector } from "@/lib/hooks";

const Equipment = () => {
   const currentComponent = useAppSelector((state) => state.shopCatalog.currentComponent)
  return (
   <>
   {currentComponent === "asicCatalog" && <Asic />}
   {currentComponent === "gpuCatalog" && <Gpu />}
   {currentComponent === "hardCatalog" && <HardDisc />}
   {currentComponent === "farmCatalog" && <Farm />}
   {currentComponent === "spareCatalog" && <Spare />}
   </>
  );
};
export default Equipment;
