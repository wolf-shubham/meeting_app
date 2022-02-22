import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { userLogout } from '../../stateManagement/actions/userActions'
import './Header.css'

function Header() {
    const history = useHistory()
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    // console.log(userInfo.name)
    const logoutHandle = () => {
        dispatch(userLogout())
        history.push('/login')
    }
    return (
        <>
            <div className="header line">
                <Link to='/home' className='homelink'>
                    <div ><h1 className='title'>.meeting</h1></div>
                </Link>
                <h2>{userInfo?.name}</h2>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={logoutHandle}
                >LOGOUT
                </Button>

            </div>
        </>
    )
}

export default Header