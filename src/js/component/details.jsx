import React , { useState , useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const DetailsPage = (props) => {
    let { state } = useLocation();
    let charInfo = state.character;
    let charImgUrl = state.imgUrl
    return (
        <div>
            <img src={charImgUrl}></img>
            <h1>Name: {charInfo.name}</h1>
            <p>Height: {charInfo.height}</p>
            <p>Weight: {charInfo.mass}</p>
            <p>Hair Color: {charInfo.hair_color}</p>
            <p>Skin Color: {charInfo.skin_color}</p>
            <p>Eye Color: {charInfo.eye_color}</p>
            <p>Birth Year: {charInfo.birth_year}</p>
            <p>Gender: {charInfo.gender}</p>
            <p>Homeworld: {charInfo.homeworld}</p>
            <Link to={"/character"}>    
                <button className="btn btn-light">Back to Characters</button>
            </Link>    
        </div>

    )
}