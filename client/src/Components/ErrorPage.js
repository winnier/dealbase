import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        }, 4500)

    }, [])

    return (
        <div>
            <img src="https://c.tenor.com/1xSjgbQFVLUAAAAd/confused-meme.gif" alt="confusion"/>
            <h1>This Page Does Not Exist</h1>
        </div>
    )

}

export default ErrorPage;