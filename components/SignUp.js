import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import { signUp } from "@/firebase/Authentication";
import GoogleButton from "./GoogleButton";

export default function SignUp() {
    let router = useRouter()
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { result, error } = await signUp(email, password)
            router.push('/home')
        } catch (e) {
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
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 5
                }}
            >
                <Typography component="h1" variant="h4">
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>

                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        name="retype-password"
                        label="Retype Password"
                        type="password"
                        id="confirm-password"
                        autoComplete="current-password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link onClick={() => router.push('/login')} variant="body2">
                                I already have an account
                            </Link>
                        </Grid>
                    </Grid>

                    <GoogleButton />
                </Box>
            </Box>
        </Container>
    );
}