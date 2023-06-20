import React from 'react'
import Navigation from '../../components/Navigation'
import { Container, Grid } from '@mui/material'
import CompanyTable from '@/components/companies/CompanyTable'

const Company = (props) => {
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
            <CompanyTable data={props}/>
          </Grid>
        </Container>

      </Grid>
    </>
  )
}

export async function getServerSideProps(context) {
  //https://api.kitta.dev/stocks/live (when kitta api is ready)
  const companies = await fetch('https://www.nepalipaisa.com/api/GetStockLive', {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      // OLD API KEY
      // 'access_token': '415a2d18-6bdd-4f02-a7c0-f081e3e88b35@#EDLPNM47GU'
      // NEW API KEY
      // 'access_token': 'c773fc74-e134-4cb5-99b2-98e7dc01cb01'
    }
  })

  const companyData = await companies.json() 

  return {
    props: {
      companyData : companyData
    }
  }
}

export default Company