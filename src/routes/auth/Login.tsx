import React, { useState } from 'react'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../plugins/firebase/firebase-config'
import { NavLink, useNavigate } from 'react-router-dom'

import Logo from '../../assets/images/logo.jpg'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = async () => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential: any) => {
                // Signed in
                const user = userCredential.user
                navigate('/dashboard')
                console.log(user)
            })
            .catch((error: any) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
            })
    }

    return (
        <Grid container alignItems={'stretch'}>
            <Box
                component="form"
                sx={{
                    flexDirection: 'column',
                    padding: 10,
                }}
                noValidate
                autoComplete="off"
            >
                <Box
                    component="img"
                    sx={{
                        maxHeight: { xs: 233, md: 200 },
                    }}
                    alt="The house from the offer."
                    src={Logo}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        color: 'red',
                    }}
                >
                    <TextField
                        required
                        id="outlined-required"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        defaultValue="user@gmail.com"
                        sx={{ marginBottom: 4 }}
                    />
                    <TextField
                        id="outlined-password-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <Button
                        variant="outlined"
                        onClick={() => {
                            login()
                        }}
                    >
                        Login
                    </Button>
                </div>

                <p className="text-sm text-white text-center">
                    Need an account? <NavLink to="/register">Register</NavLink>
                </p>
            </Box>
        </Grid>
    )
}
export default Login
