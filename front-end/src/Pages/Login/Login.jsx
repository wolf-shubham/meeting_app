import React, { useState } from 'react'
import "./Login.css"
import logo from '../../images/background.png'
import { Avatar, Button, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core'
import axios from 'axios'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandle = async (e) => {
        e.preventDefault()
        console.log(email, password)
        try {
            const config = {
                headers: {
                    'Content-type': "application/json"
                }
            }
            const { data } = await axios.post('/user/login', {
                email, password
            }, config)
            console.log(data)
            localStorage.setItem('userInfo', JSON.stringify(data))
        } catch (error) {
            console.log(error)
        }
    }


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
                <form onSubmit={submitHandle}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                    >LOGIN
                    </Button>
                </form>
            </div>

        </>
    )
}
