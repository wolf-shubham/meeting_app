import React, { useState } from 'react'
import logo from '../../images/background.png'
import { Avatar, Button, TextField, Typography } from '@material-ui/core'
import './Register.css'
import axios from 'axios'


const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pic, setPic] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const config = {
                headers: {
                    'Content-type': "application/json"
                }
            }
            const { data } = await axios.post('/user/signup', {
                name, email, password, pic
            }, config)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <img src={logo} alt="meeting" />
            <div className="login">
                <Avatar className=''>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <form onSubmit={submitHandler}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="pic"
                        label="Profile Pic"
                        type="file"
                        id="pic"
                        value={pic}
                        onChange={(e) => setPic(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className
                    >REGISTER
                    </Button>
                </form>
            </div>
        </>
    )
}

export default Register