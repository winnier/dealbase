import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Login = ({ setUser, setIsLoggedIn }) => {

    const [loginInfo, setLoginInfo] = useState([])


    const handleChange = (name, value) => {
        setLoginInfo({
            ...loginInfo,
            [name]: value
        })
        console.log(loginInfo)
    }

    const handleSubmit = async (e, loginInfo) => {
        e.preventDefault();
        let req = await fetch('http://localhost:3000/login', {
            method: 'POST',
            Accept: 'application/json',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginInfo)
        })
        let res = await req.json()
        setUser(res)
        if (res.name) {
            setIsLoggedIn(true)
        }
        console.log(res)
    }


    return (
        <div id='tint'>
        <div id='login-container'>
            <h2>Log In</h2>

            <form id='log-in' onSubmit={(e) => handleSubmit(e, loginInfo)}>
                <h3>Username</h3>
                <input
                    paceholder="username"
                    type="text"
                    name="username"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                />

                <h3>Password</h3>
               
                <input
                    paceholder="password"
                    type="password"
                    name="password"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                />

                <NavLink to="/">
                    <button placeholder='submit' type='submit'>Log In</button>
                </NavLink>

                <div id="signup-sentence">
                    or <Link id="signup-link" to='/signup'>Sign Up</Link>
                </div>
            </form>
        </div>
        </div>
    )
}





export default Login