import React , { useState , useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const PlanetDetails = (props) => {
    let { state } = useLocation();
    let planetInfo = state.planet;
    let planetImgUrl = state.imgUrl
    console.log(planetInfo)
    return (
        <div>
            <img src={planetImgUrl}></img>
            <h1>Name: {planetInfo.name}</h1>
            <p>Climate: {planetInfo.climate}</p>
            <p>Terrain: {planetInfo.terrain}</p>
            <p>Population: {planetInfo.population}</p>
            <p>Diameter: {planetInfo.diameter}</p>
            <p>Gravity: {planetInfo.gravity}</p>
            <p>Rotation Period: {planetInfo.rotation_period}</p>
            <p>Orbital Period: {planetInfo.orbital_period}</p>
            <p>Surface Water: {planetInfo.surface_water}</p>
            <Link to={"/planets"}>    
                <button className="btn btn-light">Back to Planets</button>
            </Link>
        </div>

    )
}