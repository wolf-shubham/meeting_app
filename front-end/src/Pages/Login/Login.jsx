import React, { useEffect, useState } from 'react'
import "./Login.css"
import logo from '../../images/background.png'
import { Avatar, Button, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../../stateManagement/actions/userActions'
import { useHistory } from 'react-router-dom'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo, loading, error } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push('/home')
        }
    }, [history, userInfo])

    const submitHandle = async (e) => {
        e.preventDefault()
        dispatch(loginAction(email, password))
    }


    return (
        <>
            <div className="loginComponent">

                <img src={logo} alt="meeting" className='bgImage' />
                <div className="login">
                    <Avatar className='avatar'>
                    </Avatar>
                    <h1 className='titleLogin'>LOGIN</h1>
                    <form onSubmit={submitHandle} className='loginForm'>
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
                        <h3 className='registerLink'>New Here ? <a href="/register">Register</a></h3>
                    </form>

                </div>
            </div>

        </>
    )
}
