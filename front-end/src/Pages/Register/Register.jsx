import React, { useEffect, useState } from 'react'
import logo from '../../images/background.png'
import { Avatar, Button, TextField } from '@material-ui/core'
import './Register.css'
import { useDispatch, useSelector } from 'react-redux'
import { userRegisterAction } from '../../stateManagement/actions/userActions'
import { useHistory } from 'react-router-dom'


const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pic, setPic] = useState('https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg')


    const history = useHistory()

    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const { userInfo, loading, error } = userRegister
    useEffect(() => {
        if (userInfo) {
            history.push('/home')
        }
    }, [history, userInfo])

    const postDetails = (profilepic) => {

        const data = new FormData()
        data.append("file", profilepic)
        data.append("upload_preset", "meeting_app")
        data.append("cloud_name", "wolf-shubham")
        fetch("https://api.cloudinary.com/v1_1/wolf-shubham/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPic(data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const submitHandler = async (e) => {
        e.preventDefault()
        dispatch(userRegisterAction(name, email, password, pic))
    }


    return (
        <>
            <div className="registerComponent">
                <img src={logo} alt="meeting" className='bgImage' />
                <div className="register">
                    <Avatar className='avatar'>
                    </Avatar>
                    <h1 className='titleRegister'>REGISTER</h1>
                    <form onSubmit={submitHandler} className='registerForm'>
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
                            onChange={(e) => postDetails(e.target.files[0])}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >REGISTER
                        </Button>
                        <h3 className='loginLink'>Already had an account ! <a href="/register">Login</a></h3>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register