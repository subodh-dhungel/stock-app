import Navigation from "@/components/Navigation";
import BullionPrice from "@/components/home/BullionPrice";
import Gdp from "@/components/home/Gdp";
import Inflation from "@/components/home/Inflation";
import { useTheme } from "@emotion/react";
import { Button, Container, Grid, TextField } from "@mui/material";
import addData from "@/firebase/Firestore";
import Indices from "@/components/home/Indices";
import { useEffect, useState } from "react";
import ResponsiveDialog from "@/components/Dialogue";
import { isLoggedIn } from "@/firebase/Authentication";

const Homepage = (props) => {
  console.log(isLoggedIn());
  const theme = useTheme();
  // const handleClick = async () => {
  //   const data = {
  //     name: 'Nabil Bank',
  //     address: 'kamaladi, Kathmandu'
  //   }

  //   const { result, error } = await addData('compani', 'company-id', data)

  //   if (error) {
  //     return console.log(error)
  //   }
  // }

  const [openDialog, setOpenDialog] = useState(false);

  //User lai app chalaisakepaxi login wa sign up garauna ko lagi
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn()) {
        setOpenDialog(true);
      }
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
            [theme.breakpoints.down("md")]: {
              padding: 5,
              marginTop: 10,
            },
            [theme.breakpoints.up("lg")]: {
              padding: 0,
              marginTop: 15,
            },
          }}
        >
          <Indices data={props.data} />
          <BullionPrice />
          <Inflation />
          <Gdp />
          <Button onClick={() => handleClick()}>click</Button>
        </Container>
      </Grid>

      {!isLoggedIn()
        ? openDialog && (
            <ResponsiveDialog
              dialogTitle="Login or sign up?"
              errorText="You should have an account to continue to use this app further..."
              option1="Login"
              option2="SignUp"
            />
          )
        : null}
    </>
  );
};

// export async function getServerSideProps(context) {

//   function getNepseHours(date) {
//     // Check if the date is a trading day and adjust if necessary
//     while (date.getDay() === 5 || date.getDay() === 6) {
//       if(date.getDay()=== 5){
//         date.setDate(date.getDate() - 1);
//       }else {
//         date.setDate(date.getDate() - 2);
//       }
//     }

//     // Set the opening and closing hours for the trading day
//     const openingHour = 11;
//     const openingMinute = 0;
//     const closingHour = 15;
//     const closingMinute = 0;
  
//     if(date.getHours() < openingHour){
//       date.setDate(date.getDate()-1)
//     }

//     // Create new Date objects for the opening and closing times
//     const openingTime = new Date(date);
//     openingTime.setHours(openingHour, openingMinute, 0, 0);
//     const closingTime = new Date(date);
//     closingTime.setHours(closingHour, closingMinute, 0, 0);
  
//     // Convert the opening and closing times to Unix seconds
//     const openingUnix = Math.floor(openingTime.getTime() / 1000);
//     const closingUnix = Math.floor(closingTime.getTime() / 1000);
  
//     // Return the opening and closing times as an object
//     return { opening: openingUnix, closing: closingUnix };
//   }
  

//   try {
//     const currentDate = new Date();
//     const nepseHours = getNepseHours(currentDate);
    
//     const res = await fetch(
//       `https://nepsealpha.com/trading/1/history?symbol=NEPSE&resolution=1M&from=${getNepseHours.opening}&to=${getNepseHours.closing}&pass=ok&force=161552&currencyCode=NRS`,{
//         method: "GET",
//         headers: {
//           accept: "application/json",
//         },
//       }
//     );

//     const data = await res.json();
//     return {
//       props: {
//         data: data,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         data: "There maybe some network issues", // or handle the error case appropriately
//       },
//     };
//   }
// }

export default Homepage;
