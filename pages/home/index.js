import Navigation from '@/components/Navigation'
import NewsCard from '@/components/NewsCard'
import { Container, Grid, Typography } from '@mui/material'

const Homepage = () => {
  const headingFont = 'cursive'
  const xs = 12
  const md = 6
  const lg = 4
  const xl = 4

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Navigation />
        </Grid>

        {/*Featured News Cards*/}
        <Grid 
          container
          spacing={3}
          sx={{
            margin: 10
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: headingFont
              }}
            >
              Exclusive News
            </Typography>
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


      </Grid>
    </>
  )
}

export default Homepage