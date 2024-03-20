import React, { useContext, useState } from "react"
import { AppContext } from "../layout"

export const SignUp = () => {
    const { user, setUser } = useContext(AppContext)
    const [emailInput, setEmailInput] = useState("")
    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    const handleCreateUser = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailInput,
                username: usernameInput,
                password: passwordInput,

            })
        }
        fetch("https://silver-umbrella-x55g959wj69rcvj5p-3000.app.github.dev/user", options)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                }
                else {
                    console.log(resp.status)
                }
            })
            .then(data => setUser(data))
    }
    const handleResetFields = () => {
        setUsernameInput("")
        setPasswordInput("")
        setEmailInput("")
    }

    return (
        <div className="">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 text-center">
                    <h1>Don't have an account?</h1>
                    <h2>Register Here</h2>
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="emailField text-center mt-4">
                        <label htmlFor="signupEmail">Email:</label>
                        <input required type="email" id="signupEmail" value={emailInput} onChange={(e) => { setEmailInput(e.target.value) }}></input>
                    </div>
                    <div className="usernameField text-center mt-1">
                        <label htmlFor="signupUsername">Username:</label>
                        <input required type="text" id="signupUsername" value={usernameInput} onChange={(e) => { setUsernameInput(e.target.value) }}></input>
                    </div>
                    <div className="passwordField text-center mt-1">
                        <label htmlFor="signupPassword">Password:</label>
                        <input required type="password" id="signupPassword" value={passwordInput} onChange={(e) => { setPasswordInput(e.target.value) }}></input>
                    </div>
                    <div className="buttonField text-center mt-1">
                        <button className="btn btn-light" onClick={() => { handleCreateUser(); handleResetFields() }}>Sign Up</button>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}