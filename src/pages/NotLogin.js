import React from 'react'
import { Link } from 'react-router-dom'

function NotLogin() {
    return (
        <div>
            <h1>You are not logged in</h1>
            <p>Please click here to login: <Link to="/">Login</Link></p>
        </div>
    )
}

export default NotLogin
