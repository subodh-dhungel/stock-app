import React from 'react'
import { Grid, Paper } from '@mui/material'
import CustomHeading from '../CustomHeading'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/*api key : c3f89af3e2ce4bb0b29f2fb2836da037 */

const FeaturedNews = (props) => {
    const xs = 12
    const sm = 6
    const md = 6
    const lg = 4
    const xl = 4
    const news = props.data.results

    return (
        <Grid
            container
            spacing={3}
        >
            <Grid item xs={xs}>
                <CustomHeading title='Exclusive News' />
            </Grid>


            {news.slice(0, 9).map(result => {

                return (
                    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                        <Card
                            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
                        >
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {result.title}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    {result.description}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}

        </Grid>
    )
}

export default FeaturedNews