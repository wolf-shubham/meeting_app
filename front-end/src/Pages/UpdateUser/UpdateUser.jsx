import { Button, CircularProgress, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateProfile } from '../../stateManagement/actions/userActions'
import './UpdateUser.css'


function UpdateUser() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pic, setPic] = useState()

    const dispatch = useDispatch()
    const history = useHistory()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const updateUser = useSelector((state) => state.updateUser)
    const { loading, error, success } = updateUser

    useEffect(() => {
        if (!userInfo) {
            history.push('/')
        } else {
            setName(userInfo.name)
            setEmail(userInfo.email)
            setPic(userInfo.pic)
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

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProfile({ name, email, pic }))
        history.push('/home')
    }

    return (
        <>
            <div className='updateText'>Update Profile</div>
            <form className='updateForm' onSubmit={submitHandler}>
                <div className="updateProfile">
                    {loading && <CircularProgress />}
                    <div className="updateField">
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
                            // required
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
                            // value={pic}
                            onChange={(e) => postDetails(e.target.files[0])}
                        />
                    </div>

                    <img src={userInfo.pic} alt="" className="updateImage" />
                </div>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >UPDATE
                </Button>
            </form>
        </>
    )
}

export default UpdateUser