"use client";
import c from "./chart.module.scss";
import ChartNavigation from "./chartNavigation";
import { XAxis, YAxis, Tooltip, AreaChart, Area } from "recharts";
import { useSelector } from "react-redux";

const Chart = () => {
  const reduxActiveIndex = useSelector((state) => state.chart.activeIndex);
  const reduxDevicesArray = useSelector((state) => state.order.orders);
  let totalHash = 0;
  const total = reduxDevicesArray.forEach((item) => totalHash += Number(item.attributes.ths))
  
  const baseNumber = 80;
  const deviation = 80;
  const numberOfValues = 6; 

 
  //-------------------------------------------------------------------------
  const dataDay = [
    {
      name: "00:00",
      value: (totalHash/326) -0.4,
    },
    {
      name: "03:00",
      value: (totalHash/326) + 0.4,
    },
    {
      name: "06:00",
      value: (totalHash/326) + 0.03,
    },
    {
      name: "09:00",
      value: (totalHash/326) + 0.15,
    },
    {
      name: "12:00",
      value: (totalHash/326) + 0.1,
    },
    {
      name: "15:00",
      value: totalHash/326,
    },
  ];
  const dataWeek = [
    {
      name: "Monday",
      value: (totalHash/48) - 1
    },
    {
      name: "Tuesday",
      value: (totalHash/48) + 1
    },
    {
      name: "Wednesday",
      value: (totalHash/48) - 2,
    },
    {
      name: "Thursday",
      value: (totalHash/48) + 2.5,
    },
    {
      name: "Friday",
      value: (totalHash/48) + 1.5,
    },
    {
      name: "Saturday",
      value: totalHash/48
    },
  ];
  const dataThreeMonthes = [
    {
      name: "1-2 week",
      value: (totalHash/4) + 12
    },
    {
      name: "3-4 week",
      value: (totalHash/4) - 10
    },
    {
      name: "5-6 week",
      value: (totalHash/4) - 20,
    },
    {
      name: "7-8 week",
      value: (totalHash/4) + 15,
    },
    {
      name: "9-10 week",
      value: (totalHash/4) + 10,
    },
    {
      name: "11-12 week",
      value: totalHash/4
    },
  ];
  const dataSixMonthes = [
    {
      name: "January",
      value: (totalHash/2) + 5
    },
    {
      name: "Fabruary",
      value: (totalHash/2) - 10
    },
    {
      name: "March",
      value: (totalHash/2) - 15,
    },
    {
      name: "April",
      value: (totalHash/2) + 20,
    },
    {
      name: "May",
      value: (totalHash/2) + 25,
    },
    {
      name: "June",
      value: totalHash/4
    },
  ];
  const dataYear = [
    {
      name: "January-February",
      value: totalHash
    },
    {
      name: "March-April",
      value: (totalHash) - 10
    },
    {
      name: "May-June",
      value: (totalHash) - 20,
    },
    {
      name: "July-August",
      value: (totalHash) + 15,
    },
    {
      name: "September-October",
      value: (totalHash) + 10,
    },
    {
      name: "November-December",
      value: totalHash
    },
  ];
//-----------------------------------------------------------
function getChatData(reduxActiveIndex) {
  switch(reduxActiveIndex) {
    case 0: 
    return dataDay;
    case 1: 
    return dataWeek;
    case 2: 
    return dataThreeMonthes;
    case 3: 
    return dataSixMonthes;
    case 4: 
    return dataYear;
    case 5: 
    return dataYear;
    default:
    return
  }
}
  return (
    <div className={c.wrapper}>
      <ChartNavigation />
      <div>
        <AreaChart width={1000} height={414} data={getChatData(reduxActiveIndex)} className={c.chart}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#3ED085"
            fill="#3ED085"
            fillOpacity={0.3}
          />
        </AreaChart>
      </div>
    </div>
  );
};
export default Chart;
