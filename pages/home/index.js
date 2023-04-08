import CustomHeading from '@/components/CustomHeading'
import Introduction from '@/components/Introduction'
import Navigation from '@/components/Navigation'
import NewsCard from '@/components/NewsCard'
import { Container, Grid, Typography } from '@mui/material'

const Homepage = (props) => {
  const xs = 12
  const md = 6
  const lg = 4
  const xl = 4

  return (
    <>
      {/*Root Grid*/}
      <Grid container>

        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Navigation />
        </Grid>


        <Container
          sx={{
            padding:10
          }}
        >
          {/* Introduction
          <Grid container>
            <Grid item xs={xs} md={12} lg={12} xl={12}>
              <Introduction />
            </Grid>
          </Grid> */}

          {/*Featured News Cards*/}
          <Grid
            container
            spacing={3}
          >
            <Grid item xs={xs}>
              <CustomHeading title='Exclusive News'/>
            </Grid>

            <Grid item xs={xs} md={md} lg={lg} xl={xl}>
              <NewsCard />
            </Grid>

            <Grid item xs={xs} md={md} lg={lg} xl={xl}>
              <NewsCard />
            </Grid>

            <Grid item xs={xs} md={md} lg={lg} xl={xl}>
              <NewsCard />
            </Grid>

            <Grid item xs={xs} md={md} lg={lg} xl={xl}>
              <NewsCard />
            </Grid>

            <Grid item xs={xs} md={md} lg={lg} xl={xl}>
              <NewsCard />
            </Grid>

            <Grid item xs={xs} md={md} lg={lg} xl={xl}>
              <NewsCard />
            </Grid>
          </Grid>
        </Container>


      </Grid>
    </>
  )
}

export default Homepage