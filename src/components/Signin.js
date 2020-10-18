import React, {useState } from 'react'
import { Button, input } from "@material-ui/core"
import "../css/signin.css"
import { Link } from "react-router-dom"
import Signup from "./SignUp"


function Signin() {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const signIn = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="sign_container">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" classname="logo" alt=""/>
            </Link>
            <div className="signin_container">
                <h5>Sign-in</h5>
                <br/>
                <form>
                    <h6>E-mail</h6>
                    <input type="text"
                            placeholder=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                    
                    <h6 className="passwordheader">Password</h6>
                    <input type="password"
                            placeholder=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    <Button onClick={signIn}>Sign In</Button>
                    <br/>
                    <p>By signing in you agree to Amazon's comditions of use. Please see our privacy policies.</p>
                    <Link to="/signup">
                        <Button className="signUp">Create your Amazon Account</Button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Signin
