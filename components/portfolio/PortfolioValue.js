import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const PortfolioValue = (props) => {
  let data = props.data

  let total = data.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue.kitta) * Number(currentValue.currentPrice);
  }, 0);

  let profitLoss = data.reduce(function (accumVariable, curValue) {
    return accumVariable + ((curValue.currentPrice - curValue.buyPrice) * curValue.kitta);
  }, 0);

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
            <Typography variant="body1">NPR {total}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Profit/Loss</Typography>
            <Typography variant="body1" style={{ color: profitLoss < 0 ? 'red' : 'green' }}>
              {profitLoss < 0 ? -profitLoss : profitLoss}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PortfolioValue;
