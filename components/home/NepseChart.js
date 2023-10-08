import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Area,
} from "recharts";

const NepseChart = (props) => {
  const apiData = props.data;
  console.log(apiData);
  const data = [
    {
      time: "11:00",
      index: 2051,
    },
    {
      time: "11:30",
      index: 2076,
    },
    {
      time: "12:00",
      index: 2081,
    },
    {
      time: "12:30",
      index: 2071,
    },
    {
      time: "1:00",
      index: 2073,
    },
    {
      time: "1:30",
      index: 2068,
    },
    {
      time: "2:00",
      index: 2067,
    },
    {
      time: "2:30",
      index: 2070,
    },
    {
      time: "3:00",
      index: 2077,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="time" />
        <YAxis domain={['dataMin', 'dataMax']} allowDataOverflow={true} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="index" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default NepseChart;
