import { CircularProgress, Grid } from '@mui/material'
import React from 'react'
import Navigation from './Navigation'

const SpinnerLoader = () => {
  return (
    <Grid container>
        <Grid item>
            <Navigation />
        </Grid>

        <Grid item>
            <CircularProgress />
        </Grid>
    </Grid>
  )
}

export default SpinnerLoader