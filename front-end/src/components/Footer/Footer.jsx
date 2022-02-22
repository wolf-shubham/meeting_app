import React from 'react'

function Footer() {
    const footerStyle = {
        textAlign: "center",
        height: "10vh",
        fontSize: '25px',
        fontWeight: '600',
        letterSpacing: '1px',
        color: 'darkgrey'
    }
    return (
        <div style={footerStyle}>
            <small>&copy; Copyright 2022, Shubham Sharma
            </small>
        </div>
    )
}

export default Footer