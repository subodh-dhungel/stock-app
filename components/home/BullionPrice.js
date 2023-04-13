import React from 'react'
import CustomHeading from '../CustomHeading'
import { Paper,Grid } from '@mui/material'
import PriceTable from './GoldPriceTable'
import ForexPriceTable from './ForexPriceTable'
import GoldPriceTable from './GoldPriceTable'

const BullionPrice = () => {
  const xs = 12
  const sm = 12
  const md = 6
  const lg = 6
  const xl = 6

  return (
    <Grid 
      container
      spacing={5}
      sx={{
        marginTop: 5
      }}
    >
      {/*gold price */}
      <Grid
        item
        xs={xs} sm={sm} md={md} lg={lg} xl={xl}
      >
        <Paper
          variant='elevation'
          elevation={8}
          sx={{
            padding: 5
          }}
        >
          <CustomHeading title="Gold Price"/>
          <GoldPriceTable />
          
        </Paper>
      </Grid>

      {/*forex price */}
      <Grid
        item
        xs={xs} sm={sm} md={md} lg={lg} xl={xl}
      >
        <Paper
          variant='elevation'
          elevation={8}
          sx={{
            padding: 5
          }}
        >
          <CustomHeading title="Foreign Exchange Rates"/>
          <ForexPriceTable />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default BullionPrice