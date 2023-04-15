import React from 'react'
import { Grid, Paper } from '@mui/material'
import CustomHeading from '../CustomHeading'
import NewsCard from '../NewsCard'


const FeaturedNews = () => {
    const xs = 12
    const sm = 6
    const md = 6
    const lg = 4
    const xl = 4
    return (
        <Paper
            variant='elevation'
            elevation={8}
            sx={{
                padding: 10
            }}
        >
            <Grid
                container
                spacing={3}
            >
                <Grid item xs={xs}>
                    <CustomHeading title='Exclusive News' />
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
    )
}

export default FeaturedNews