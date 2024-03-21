import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppContext } from "../layout";

export const LoginPage = () => {
    const [userInput, setUserInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    const { user, setUser, favorites, setFavorites, isLoggedIn, setIsLoggedIn } = useContext(AppContext)

    useEffect(() => {
        if (user.id) {
            handleGetFavs();
            alert(`Welcome ${user.username}`)
        }
    }, [user])

    const handleGetUser = () => {
        const method = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: userInput })
        }
        fetch("https://silver-umbrella-x55g959wj69rcvj5p-3000.app.github.dev/getuser", method)
            .then(resp => resp.json())
            .then(data => setUser(data))
            .then(() => { setIsLoggedIn(true) })
    }

    const handleGetFavs = () => {
        fetch(`https://silver-umbrella-x55g959wj69rcvj5p-3000.app.github.dev/favorites/${user.id}`)
            .then(resp => resp.json())
            .then(data => setFavorites(data))
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="borderDiv">
                <h1 className="mb-5 text-center d-flex justify-content-center align-items-center w-100">Login</h1>
                <div className="text-center mb-2 mx-auto w-100 d-flex justify-content-center align-items-center" style={{ display: "block" }}>
                    <label htmlFor="username"><i className="fas fa-user" style={{ width: "20px", height: "20px" }}></i></label>
                    <input id="username" type="text" value={userInput} onChange={(e) => { setUserInput(e.target.value) }} />
                </div>
                <div className="text-center mb-2 mx-auto w-100 d-flex justify-content-center align-items-center" style={{ display: "block" }}>
                    <label htmlFor="password"><i className="fas fa-key" style={{ width: "20px", height: "20px" }}></i></label>
                    <input id="password" type="password" value={passwordInput} onChange={(e) => { setPasswordInput(e.target.value) }} onKeyUp={(e) => { if (e.key === "Enter") { handleGetUser(); setPasswordInput(""); setUserInput("") } }} />
                </div>
                <div className="text-center mx-auto">
                    <button className="mt-3 mb-5 btn btn-primary loginPageBtn" onClick={() => { handleGetUser(); setPasswordInput(""); setUserInput("") }}>
                        Login
                    </button>
                </div>
                <div className="text-center mx-auto">
                    <Link to={"/signup"}>
                        <a><strong>New user? Click here to sign up.</strong></a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
