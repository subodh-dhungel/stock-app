import Navigation from '@/components/Navigation'
import BullionPrice from '@/components/home/BullionPrice'
import Gdp from '@/components/home/Gdp'
import Inflation from '@/components/home/Inflation'
import { useTheme } from '@emotion/react'
import { Button, Container, Grid, TextField } from '@mui/material'
import addData from '@/firebase/Firestore'
import Indices from '@/components/home/Indices'
import { useEffect, useState } from 'react'
import ResponsiveDialog from '@/components/Dialogue'
import { isLoggedIn } from '@/firebase/Authentication'

const Homepage = (props) => {
  const a = isLoggedIn()
  console.log(a)
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

  const [openDialog, setOpenDialog] = useState(false);

  //User lai app chalaisakepaxi login wa sign up garauna ko lagi
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenDialog(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
          <Indices />
          <BullionPrice />
          <Inflation />
          <Gdp />
          <Button onClick={()=>handleClick()}>click</Button>
        </Container>
      </Grid>

      {
        !isLoggedIn() ? openDialog && <ResponsiveDialog
        dialogTitle="Login or sign up?"
        errorText="You should have an account to continue to use this app further..."
        option1="Login"
        option2="SignUp"
      /> : null
      }
    </>
  )
}

export default Homepage