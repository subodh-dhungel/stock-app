import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn, signInGoogle } from "@/firebase/Authentication";
import GoogleButton from "./GoogleButton";

export default function Login() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let router = useRouter()

  const googleLogin = async(e) => {
    e.preventDefault()
    try{
      await signInGoogle()
      router.push(`/home`)
    }catch(e){
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const {result, error} = await signIn(email,password)
      router.push('/home')
    }catch(e){
      console.log(e)
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 5,
          marginBottom: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 8 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={()=> router.push(`/signup`)} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>      
          </Grid>

          <GoogleButton text="Login with google" onClick={(e)=>googleLogin(e)}/>
        </Box>
      </Box>
    </Container>
  );
}