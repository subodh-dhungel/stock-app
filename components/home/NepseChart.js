import { Container, Paper } from "@mui/material";
import React from "react";
import CustomHeading from "../CustomHeading";
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
      time: "Shrawan",
      index: 0.0826,
    },
    {
      time: "Bhadra",
      index: 0.0864,
    },
    {
      time: "Ashwin",
      index: 0.085,
    },
    {
      time: "Kartik",
      index: 0.0808,
    },
    {
      time: "Mangsir",
      index: 0.0738,
    },
    {
      time: "Poush",
      index: 0.0726,
    },
    {
      time: "Magh",
      index: 0.0788,
    },
    {
      time: "Falgun",
      index: 0.0744,
    },
    {
      time: "Chaitra",
      index: 0.065,
    },
    {
      time: "Baisakh",
      index: 0.0659,
    },
    {
      time: "Jestha",
      index: 0.062,
    },
    {
      time: "Ashar",
      index: 0.06,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="index" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default NepseChart;
