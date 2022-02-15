import React from 'react'
import logo from '../../images/background.png'
import { Avatar, Button, TextField, Typography } from '@material-ui/core'
import './Register.css'


const Register = () => {
    return (
        <>
            <img src={logo} alt="meeting" />
            <div className="login">
                <Avatar className=''>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                />
                <TextField
                    margin="normal"
                    fullWidth
                    required
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className
                >REGISTER
                </Button>
            </div>
        </>
    )
}

export default Register