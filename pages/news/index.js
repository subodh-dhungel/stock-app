import React from 'react'
import Navigation from '../../components/Navigation'
import FeaturedNews from '@/components/home/FeaturedNews'
import { Container } from '@mui/material'

const News = (props) => {
  return (
    <>
      <Container
        sx={{
          marginTop: 15,
          marginBottom: 10
        }}
      >
        <Navigation />
        <FeaturedNews data={props} />
      </Container>
    </>
  )
}

export async function getServerSideProps(context) {
  let news =
   await fetch('https://newsdata.io/api/1/news?apikey=pub_2080765951c79f92a7788fb78517e284638cf&country=np&category=business,politics,science,technology')
  let newsData = await news.json()

  return {
    props: newsData
  }
}

export default News