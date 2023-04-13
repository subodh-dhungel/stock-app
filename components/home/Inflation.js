import { Paper } from '@mui/material'
import React from 'react'
import CustomHeading from '../CustomHeading'

const Inflation = () => {
  return (
    <Paper
        elevation={8}
        sx={{
            marginTop: 10,
            padding: 5
        }}
    >
        <CustomHeading title='Inflation'/>
    </Paper>
  )
}

export default Inflation