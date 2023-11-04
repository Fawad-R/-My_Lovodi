import React from 'react'
import '../Style/Help/Help_Header.css'
const Help_Header = () => {
    return (
        <div className='Help_Header0'>
        <div className='Help_Header'>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required=""/>
                            <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required=""/>
                            <label>Password</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Help_Header