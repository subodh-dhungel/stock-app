import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { auth } from "@/firebase/Config";
import { useRouter } from "next/router";


export default function SignUp() {
    let router = useRouter()
    let [fName, setFname] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')
    let [dob, setDob] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // const data = new FormData(event.currentTarget);

        console.log({
            firstName: fName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            dateOfBirth: dob
        });
    };

    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 6,
                    marginTop: 15,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 15
                }}
            >
                <Typography component="h1" variant="h4">
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="full name"
                        name="full-name"
                        autoComplete="name"
                        autoFocus
                        onChange={(e)=>setFname(e.target.value)}
                    />

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

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="retype-password"
                        label="Retype Password"
                        type="password"
                        id="confirm-password"
                        autoComplete="current-password"
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date of birth"
                            on={(e)=>setDob(e.target.value)}
                            slotProps={{
                                textField: {
                                    helperText: 'DD/MM/YYYY',
                                }
                            }}
                            sx={{
                                marginTop: 2
                            }}
                        />
                    </LocalizationProvider>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 8 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/login" variant="body2">
                                I already have an account
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}