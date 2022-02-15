import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <>
            <div className="header">
                <Link to='/' className='homelink'>
                    <div className="line"><h1 className='title'>.meeting</h1></div>
                </Link>
            </div>
        </>
    )
}

export default Header