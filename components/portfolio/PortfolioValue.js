import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const PortfolioValue = (props) => {
  let data = props.data
  console.log(data)

  let total = data.map(item => Number(item.price) * Number(item.kitta)).reduce((a, b) => a + b, 0);
  console.log(total)

    return (
      <Grid container>
        <Paper style={{ 
            width: '100%',
            height: '80px',
            padding: '30px',
            borderRadius: '50px'
        }}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h6">Portfolio Value</Typography>
              <Typography variant="body1">1000</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Profit/Loss</Typography>
              <Typography variant="body1">10000</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  };
  
  export default PortfolioValue;
  