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
    // console.log(userInfo)
    const logoutHandle = () => {
        dispatch(userLogout())
        history.push('/login')
    }
    return (
        <>
            <div className="header">
                <Link to='/' className='homelink'>
                    <div className="line"><h1 className='title'>.meeting</h1></div>
                </Link>
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