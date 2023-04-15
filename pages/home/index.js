import Navigation from '@/components/Navigation'
import BullionPrice from '@/components/home/BullionPrice'
import FeaturedNews from '@/components/home/FeaturedNews'
import Inflation from '@/components/home/Inflation'
import { useTheme } from '@emotion/react'
import { Container, Grid } from '@mui/material'

const Homepage = () => {
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
              padding: 0,
              marginTop: 15
            },
          }}
        >

          <FeaturedNews />
          <BullionPrice />
          <Inflation />
        </Container>


      </Grid>
    </>
  )
}

export default Homepage