import { useState } from 'react'
import Login from "./Login"
import SignUp from "./SignUp"

const Home = () => {


    const [signedUp, setSignedUp] = useState(true)

    const handleToggleSignUp = () => {
        setSignedUp((signedUp) => !signedUp)
    }

    const handleClick = () => {

    }
    return (
     <div id='whole ass page'>
        <div id='page'>
            <div id='gradient-background'>
                <div id='nav'>
                    <div id='logo'>
                    DealBase
                    </div>
                    <div id='login' onClick={(handleToggleSignUp)}>
                        {signedUp ? <p>Login</p> : <p>SignUp</p>}
                    </div>
                <div id='home-text'>
                    We do a lot of business stuff. A LOT OF IT
                </div>
                <div id='short-desc'>
                    A modern day application for active entrepreneurs
                </div>
                <div id='login-stuff'>
                    {signedUp ? <Login /> : <SignUp />}
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home