import CustomHeading from '@/components/CustomHeading'
import Navigation from '@/components/Navigation'
import NewsCard from '@/components/NewsCard'
import BullionPrice from '@/components/home/BullionPrice'
import Inflation from '@/components/home/Inflation'
import { useTheme } from '@emotion/react'
import { Container, Grid, Paper, Typography } from '@mui/material'

const Homepage = (props) => {
  const xs = 12
  const sm = 6
  const md = 6
  const lg = 4
  const xl = 4
  const theme = useTheme()

  return (
    <>
      {/*Root Grid*/}
      <Grid container>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Navigation />
        </Grid>


        <Container
          sx={{
            [theme.breakpoints.down('md')]: {
              padding: 5,
              marginTop: 10
            },
            [theme.breakpoints.up('lg')]: {
              padding: 5,
              marginTop: 10
            },
          }}
        >
          {/* Introduction
          <Grid container>
            <Grid item xs={xs} md={12} lg={12} xl={12}>
              <Introduction />
            </Grid>
          </Grid> */}

          {/*Featured News Cards*/}
          <Paper 
            variant='elevation'
            elevation={8}
            sx={{
              padding: 5
            }}
          >
          <Grid
            container
            spacing={3}
          >
            <Grid item xs={xs}>
              <CustomHeading title='Exclusive News'/>
            </Grid>

            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <NewsCard />
            </Grid>

            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <NewsCard />
            </Grid>

            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <NewsCard />
            </Grid>

            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <NewsCard />
            </Grid>

            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <NewsCard />
            </Grid>

            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <NewsCard />
            </Grid>
          </Grid>
          </Paper>
          
          <BullionPrice />
          <Inflation />

        </Container>


      </Grid>
    </>
  )
}

export default Homepage