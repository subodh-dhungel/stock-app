import Navigation from '@/components/Navigation'
import BullionPrice from '@/components/home/BullionPrice'
import FeaturedNews from '@/components/home/FeaturedNews'
import Gdp from '@/components/home/Gdp'
import Inflation from '@/components/home/Inflation'
import { useTheme } from '@emotion/react'
import { Button, Container, Grid, TextField } from '@mui/material'
import addData from '@/firebase/Firestore'

const Homepage = () => {
  console.log('button click')
  const theme = useTheme()
  
  const handleClick = async () => {
    const data = {
      name: 'Nabil Bank',
      address: 'kamaladi, Kathmandu'
    }
    
    const { result, error } = await addData('compani', 'company-id', data)

    if (error) {
      return console.log(error)
    }
  }

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
          <Gdp />
          <Button onClick={()=>handleClick()}>click</Button>
        </Container>


      </Grid>
    </>
  )
}

export default Homepage