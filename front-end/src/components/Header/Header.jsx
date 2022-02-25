import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { userLogout } from '../../stateManagement/actions/userActions'
import './Header.css'


const useStyles = makeStyles((theme) => ({
    btns: {
        margin: "auto 40px",
        width: '8%',
    }
}));

function Header() {

    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    // console.log(userInfo.name)
    const logoutHandle = () => {
        dispatch(userLogout())
        history.push('/')
    }

    const loginHandle = () => {
        history.push('/login')
    }
    const registerHandle = () => {
        history.push('/register')
    }

    useEffect(() => { }, [userInfo]);
    return (

        <>
            <div className="header line">
                <Link to='/home' className='homelink'>
                    <div ><h1 className='title'>.meeting</h1></div>
                </Link>
                {
                    userInfo
                        ?
                        <>
                            <div className="namePic">
                                <h2 className='userName'>{userInfo?.name.toUpperCase()}</h2>
                                <a href="/editUser"><img src={userInfo?.pic} alt="display pic" className='displayPic' href='/editUser' /></a>
                            </div>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={logoutHandle}
                                className={classes.btns}
                            >LOGOUT
                            </Button>
                        </>
                        :
                        <><Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={loginHandle}
                            className={classes.btns}
                        >LOGIN
                        </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={registerHandle}
                                className={classes.btns}
                            >REGISTER
                            </Button></>

                }


            </div>
        </>
    )
}

export default Header