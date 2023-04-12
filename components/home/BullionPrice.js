import React from 'react'
import CustomHeading from '../CustomHeading'
import { Paper } from '@mui/material'

const BullionPrice = () => {
  const xs = 12
  const sm = 12
  const md = 6
  const lg = 6
  const xl = 6

  return (
    <Grid container>
      <Grid
        item
      >
        <Paper elevated>
          <CustomHeading title="Bullion Price"/>
          
        </Paper>
      </Grid>
    </Grid>
  )
}

export default BullionPrice