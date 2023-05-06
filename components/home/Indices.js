import { Grid, Paper } from '@mui/material'
import CustomHeading from '../CustomHeading'
import NepseIndex from './NepseIndex'
import SensitiveIndex from './SensitiveIndex'

const Indices = () => {
    const xs = 12
    const sm = 12
    const md = 6
    const lg = 6
    const xl = 6

    return (
        <Grid
            container
            spacing={5}
        >
            {/*gold price */}
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
                    <CustomHeading title="Nepse" />
                    <NepseIndex />

                </Paper>
            </Grid>

            {/*forex price */}
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
                    <CustomHeading title="SENSITIVE" />
                    <SensitiveIndex />
                </Paper>
            </Grid>
        </Grid>
    )
}

export async function getServerSideProps() {
    const data = await fetch('https://api.kitta.dev/market_overview/', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'access_token': '415a2d18-6bdd-4f02-a7c0-f081e3e88b35@#EDLPNM47GU'
        }
    })

    const jsonData = await data.json()

    const nepseData = jsonData.map(data => {
        
    })

    return{
        props : {
            nepse : jsonData
        }
    }
}

export default Indices