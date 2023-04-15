import { Container, Paper } from '@mui/material'
import React from 'react'
import CustomHeading from '../CustomHeading'
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Area } from 'recharts'

const data = [
  {
    "month": "Shrawan",
    "Inflation": 0.0826,
  },
  {
    "month": "Bhadra",
    "Inflation": 0.0864,
  },
  {
    "month": "Ashwin",
    "Inflation": 0.085,
  },
  {
    "month": "Kartik",
    "Inflation": 0.0808,
  },
  {
    "month": "Mangsir",
    "Inflation": 0.0738,
  },
  {
    "month": "Poush",
    "Inflation": 0.0726,
  },
  {
    "month": "Magh",
    "Inflation": 0.0788,
  },
  {
    "month": "Falgun",
    "Inflation": 0.0744,
  },
  {
    "month": "Chaitra",
    "Inflation": 0.065,
  },
  {
    "month": "Baisakh",
    "Inflation": 0.0659,
  },
  {
    "month": "Jestha",
    "Inflation": 0.062,
  },
  {
    "month": "Ashar",
    "Inflation": 0.06,
  },
]

const Inflation = () => {
  const formatPercent = (value) => `${(value * 100).toFixed(2)}%`
  return (
    <Paper
      elevation={8}
      sx={{
        marginTop: 10,
        marginBottom: 10,
        padding: 5
      }}
    >

      <CustomHeading title='Inflation' />
      <Container>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="month" />
            <YAxis tickFormatter={formatPercent}/>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip formatter={formatPercent}/>
            <Area type="monotone" dataKey="Inflation" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </Container>
    </Paper>
  )
}

export default Inflation