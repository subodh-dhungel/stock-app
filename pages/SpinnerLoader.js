import { CircularProgress, Container, Grid } from '@mui/material'
import React from 'react'

const SpinnerLoader = () => {
  const xs = 12
  const sm = 12
  const md = 12
  const lg = 12
  const xl = 12  

  return (
    <Grid container>
      
      <Grid 
        item
        xs = {xs}
        sm = {sm}
        md = {md}
        lg = {lg}
        xl = {xl}
      >
        <Container
           sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
          }}
        >
          <CircularProgress size={100} />
        </Container>
      </Grid>
    </Grid>
  )
}

export default SpinnerLoader