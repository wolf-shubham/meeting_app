import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import webLogo from '../../images/home.png'
import './LandingPage.css'

function LandingPage() {

    const history = useHistory()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo, loading, error } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push('/home')
        }
    }, [userInfo, history])

    return (
        <>
            <div className="landingContainer">
                <img src={webLogo} alt="meeting" className='homeImage' />
                <span className='intro'>we help you <br /> <span className='schedule' style={{ color: 'rgb(22, 180, 22)' }}> schedule &</span><br /> <span className='schedule' style={{ color: 'rgb(7, 241, 241)' }}>maintain</span> <br /> your meetings effectively.</span>
            </div>
        </>

    )
}

export default LandingPage