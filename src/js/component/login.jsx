import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
    const [usernameInput,setUserNameInput] = useState("")
    const [passwordInput,setPasswordInput] = useState("")
    const [userLoggedIn,setUserLoggedIn] = useState("")


    return(
            <div className="d-flex justify-content-center">
                <div className="borderDiv">
                    <h1 className="text-center d-flex justify-content-center align-items-center w-100">Login</h1>
                    <div className="text-center mx-auto w-100 d-flex justify-content-center align-items-center" style={{display: "block"}}>  
                        <label htmlFor="username"><i className="fas fa-user" style={{width: "20px" , height: "20px"}}></i></label>
                        <input id="username" type="text" value={usernameInput} onChange={(e)=>{setUserNameInput(e.target.value)}} />
                    </div>
                    <div className="text-center mx-auto w-100 d-flex justify-content-center align-items-center" style={{display: "block"}}>
                        <label htmlFor="password"><i className="fas fa-key" style={{width: "20px" , height: "20px"}}></i></label>
                        <input id="password" type="password" value={passwordInput} onChange={(e)=>{setPasswordInput(e.target.value)}} onKeyUp={(e)=>{if(e.key === "Enter"){setPasswordInput("");setUserNameInput("");if(usernameInput === "BRANDENREILLY"){setUserLoggedIn("BRANDENREILLY")}else{alert(`${usernameInput} was not found.`)}}}} />
                    </div>
                </div>
            </div>
    );
}
