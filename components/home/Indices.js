import { Grid, Paper } from '@mui/material'
import CustomHeading from '../CustomHeading'
import NepseChart from './NepseChart'

const Indices = (props) => {
    const xs = 12
    const sm = 12
    const md = 12
    const lg = 12
    const xl = 12

    return (
        <Grid
            container
            spacing={5}
        >
            <Grid
                item
                xs={xs} sm={sm} md={md} lg={lg} xl={xl}
            >
                <Paper
                    variant='elevation'
                    elevation={8}
                    sx={{
                        padding: 5
                    }}
                >
                    <CustomHeading title="Today's Market Update" />
                    <NepseChart />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Indices