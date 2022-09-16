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
        <div className='login-container'>
            <h2>Log In</h2>

            <form className='log-in' id='log-in' onSubmit={(e) => handleSubmit(e, loginInfo)}>
                <label>Username</label>
                <input
                    paceholder="username"
                    type="text"
                    name="username"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <label>Password</label>
                <input
                    paceholder="password"
                    type="password"
                    name="password"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <NavLink to="/">
                    <button placeholder='submit' type='submit'>Log In</button>
                </NavLink>
            </form>
        </div>
        </div>
    )
}





export default Login