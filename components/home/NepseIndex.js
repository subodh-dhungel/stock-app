import { Container, Paper } from '@mui/material'
import React from 'react'
import CustomHeading from '../CustomHeading'
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts'

const data = [
    {
        "year": 2011,
        "gdp": 21570000000,
    },
    {
        "year": 2012,
        "gdp": 21700000000,
    },
    {
        "year": 2013,
        "gdp": 22160000000,
    },
    {
        "year": 2014,
        "gdp": 22730000000,
    },
    {
        "year": 2015,
        "gdp": 24360000000,
    },
    {
        "year": 2016,
        "gdp": 24520000000,
    },
    {
        "year": 2017,
        "gdp": 28970000000,
    },
    {
        "year": 2018,
        "gdp": 33110000000,
    },
    {
        "year": 2019,
        "gdp": 34190000000,
    },
    {
        "year": 2020,
        "gdp": 33430000000,
    },
    {
        "year": 2021,
        "gdp": 36298000000,
    },
    {
        "year": 2022,
        "gdp": 38340000000,
    },
]

const NepseIndex = () => {
    const formatBillion = (value) => `${(value / 1000000000)} Bln`
    return (
        <>
            <Container>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={data}
                        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey="year" />
                        <YAxis tickFormatter={formatBillion} />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip formatter={formatBillion} />
                        <Area type="monotone" dataKey="gdp" stroke="#FF0000" fill="#00FF00" />
                    </AreaChart>
                </ResponsiveContainer>
            </Container>

        </>
    )
}

export default NepseIndex