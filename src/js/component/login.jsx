import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../layout";

export const LoginPage = () => {
    const [userInput, setUserInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const { user, setUser, favorites, setFavorites } = useContext(AppContext)

    const handleGetUser = async () => {
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
            .then(console.log(user[0].id))
            .then(await fetch(`https://silver-umbrella-x55g959wj69rcvj5p-3000.app.github.dev/favorites/${user[0].id}`)
                .then(resp => resp.json())
                .then(data => setFavorites(data)))

    }
    return (
        <div className="d-flex justify-content-center">
            <div className="borderDiv">
                <h1 className="text-center d-flex justify-content-center align-items-center w-100">Login</h1>
                <div className="text-center mx-auto w-100 d-flex justify-content-center align-items-center" style={{ display: "block" }}>
                    <label htmlFor="username"><i className="fas fa-user" style={{ width: "20px", height: "20px" }}></i></label>
                    <input id="username" type="text" value={userInput} onChange={(e) => { setUserInput(e.target.value) }} />
                </div>
                <div className="text-center mx-auto w-100 d-flex justify-content-center align-items-center" style={{ display: "block" }}>
                    <label htmlFor="password"><i className="fas fa-key" style={{ width: "20px", height: "20px" }}></i></label>
                    <input id="password" type="password" value={passwordInput} onChange={(e) => { setPasswordInput(e.target.value) }} onKeyUp={(e) => { if (e.key === "Enter") { handleGetUser(); setPasswordInput(""); setUserInput("") } }} />
                </div>
                <div className="text-center mx-auto">
                    <Link to={"/"}>
                        <button className="btn btn-primary" onClick={() => { handleGetUser(); setPasswordInput(""); setUserInput(""); handleGetFavs() }}>
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
