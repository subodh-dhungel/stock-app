import React from 'react'
import Navigation from '../../components/Navigation'
import { Container, Grid } from '@mui/material'
import CompanyTable from '@/components/companies/CompanyTable'

const Company = () => {
  return (
    <>
      <Grid container>
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Navigation />
        </Grid>
        <Container
          sx={{
            marginTop: 15
          }}
        >
          <Grid item>
            <CompanyTable />
          </Grid>
        </Container>

      </Grid>
    </>
  )
}

export default Company