import React, {useState } from 'react'
import { Button, input } from "@material-ui/core"

function SignUp() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const signUp = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="sign_container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" classname="logo" alt="/"/>
            <div className="signin_container">
            <h5>Sign-in</h5>
            <form>
                <input type="text"
                        placeholder="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} 
                        />
                <input type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} 
                        />
                <input type="text"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                <input type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={signUp}>Sign In</Button>
            </form>
            </div>
        </div>
    )
}

export default SignUp
