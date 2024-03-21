import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const DetailsPage = (props) => {
    const [charDetails, setCharDetails] = useState([])
    let { state } = useLocation();
    let charInfo = state.character;
    let charImgUrl = state.imgUrl
    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/" + charInfo.uid)
            .then(resp => resp.json())
            .then(data => setCharDetails(data.result.properties))
    }, [])
    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/" + charInfo.char_id)
            .then(resp => resp.json())
            .then(data => setCharDetails(data.result.properties))
    }, [])
    return (
        <div className="text-center">
            <img src={charImgUrl}></img>
            <h1>Name: {charDetails.name}</h1>
            <p>Height: {charDetails.height}</p>
            <p>Weight: {charDetails.mass}</p>
            <p>Hair Color: {charDetails.hair_color}</p>
            <p>Skin Color: {charDetails.skin_color}</p>
            <p>Eye Color: {charDetails.eye_color}</p>
            <p>Birth Year: {charDetails.birth_year}</p>
            <p>Gender: {charDetails.gender}</p>
            <p>Homeworld: {charDetails.homeworld}</p>
            <Link to={"/character"}>
                <button className="btn btn-light">Back to Characters</button>
            </Link>
        </div>

    )
}