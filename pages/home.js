import Navigation from "@/components/Navigation";
import BullionPrice from "@/components/home/BullionPrice";
import Gdp from "@/components/home/Gdp";
import Inflation from "@/components/home/Inflation";
import { useTheme } from "@emotion/react";
import { Button, Container, Grid, TextField } from "@mui/material";
import Indices from "@/components/home/Indices";
import { useEffect, useState } from "react";
import ResponsiveDialog from "@/components/Dialogue";
import { isLoggedIn } from "@/firebase/Authentication";
import { getAuth } from "firebase/auth";

// const Homepage = (props) => {
//   console.log(isLoggedIn());
//   const theme = useTheme();
//   const auth = getAuth()

//   const [openDialog, setOpenDialog] = useState(false);

//   //User lai app chalaisakepaxi login wa sign up garauna ko lagi
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (isLoggedIn()) {
//         setOpenDialog(true);
//       }
//     }, 3000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <>
//       {/*Root Grid*/}
//       <Grid container>
//         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//           <Navigation />
//         </Grid>

//         <Container
//           sx={{
//             [theme.breakpoints.down("md")]: {
//               padding: 5,
//               marginTop: 10,
//             },
//             [theme.breakpoints.up("lg")]: {
//               padding: 0,
//               marginTop: 15,
//             },
//           }}
//         >
//           <Indices data={props.data} />
//           <BullionPrice />
//           <Inflation />
//           <Gdp />
//         </Container>
//       </Grid>

//       {!isLoggedIn().loggedIn
//         ? openDialog && (
//             <ResponsiveDialog
//               dialogTitle="Login or sign up?"
//               errorText="You should have an account to continue to use this app further..."
//               option1="Login"
//               option2="SignUp"
//             />
//           )
//         : null}
//     </>
//   );
// };


const Homepage = (props) => {
  console.log(isLoggedIn());
  const theme = useTheme();
  const auth = getAuth()

  const [openDialog, setOpenDialog] = useState(false);
  const [isLoggedInState, setIsLoggedInState] = useState(false);

  //User lai app chalaisakepaxi login wa sign up garauna ko lagi
  useEffect(() => {
    const checkLoginStatus = async () => {
      const loginStatus = await isLoggedIn();
      setIsLoggedInState(loginStatus.loggedIn);
      if (loginStatus.loggedIn) {
        setOpenDialog(true);
      }
    };

    const timer = setTimeout(checkLoginStatus, 3000);

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
        </Container>
      </Grid>

      {!isLoggedInState
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

export default Homepage;
