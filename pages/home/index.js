import Navigation from '@/components/Navigation'
import BullionPrice from '@/components/home/BullionPrice'
import FeaturedNews from '@/components/home/FeaturedNews'
import Gdp from '@/components/home/Gdp'
import Inflation from '@/components/home/Inflation'
import { useTheme } from '@emotion/react'
import { Button, Container, Grid, TextField } from '@mui/material'
import addData from '@/firebase/Firestore'

const Homepage = (props) => {
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

          <FeaturedNews data={props}/>
          <BullionPrice />
          <Inflation />
          <Gdp />
          <Button onClick={()=>handleClick()}>click</Button>
        </Container>


      </Grid>
    </>
  )
}

export async function getServerSideProps(context){
  let news = await fetch('https://newsdata.io/api/1/news?apikey=pub_2080765951c79f92a7788fb78517e284638cf&country=np&category=business,politics,science,technology')
  let newsData = await news.json()

  return {
    props: newsData
  }
}

export default Homepage