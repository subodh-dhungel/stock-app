import React, { useRef, useState } from 'react'
import { Grid, Paper } from '@mui/material'
import CustomHeading from '../CustomHeading'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/*api key : c3f89af3e2ce4bb0b29f2fb2836da037 */

const FeaturedNews = (props) => {
    const xs = 12
    const sm = 12
    const md = 12
    const lg = 12
    const xl = 12
    const news = props.data.results
    const [expandedIndex, setExpandedIndex] = useState(-1)
    const ref = useRef(null);


    const handleExpandClick = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={xs}>
                <CustomHeading title='Exclusive News' />
            </Grid>

            {news.map((result, index) => {
                const isExpanded = index === expandedIndex

                return (
                    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} key={index}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    {result.title}
                                </Typography>
                                <Typography variant="body1">
                                    {result.pubDate}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    {result.description}
                                </Typography>
                                {isExpanded && (
                                    <Typography ref={ref} variant="h5" color="text.tertiary">
                                        {result.content}
                                    </Typography>
                                )}
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small" onClick={() => {
                                    handleExpandClick(index)
                                    if (isExpanded && ref.current) {
                                        ref.current.focus()
                                    }
                                }}>
                                    {isExpanded ? 'Show Less' : 'Learn More'}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default FeaturedNews
