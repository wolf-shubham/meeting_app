import React from 'react'
import "./Login.css"
import logo from '../../images/background.png'
import { Avatar, Button, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core'

export const Login = () => {
    return (
        <>
            <img src={logo} alt="meeting" />
            <div className='bg'>Login</div>
            <div className="login">
                <Avatar className=''>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className
                >LOGIN
                </Button>
            </div>

        </>
    )
}
