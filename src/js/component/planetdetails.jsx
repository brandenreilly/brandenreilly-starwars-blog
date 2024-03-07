import React , { useState , useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const PlanetDetails = (props) => {
    const [planetDetails , setPlanetDetails] = useState([])
    useEffect(()=>{
        fetch("https://www.swapi.tech/api/planets/" + planetInfo.uid)
        .then(resp => resp.json())
        .then(data => setPlanetDetails(data.result.properties))
    }, [])
    let { state } = useLocation();
    let planetInfo = state.planet;
    let planetImgUrl = state.imgUrl
    return (
        <div>
            <img src={planetImgUrl}></img>
            <h1>Name: {planetInfo.name}</h1>
            <p>Climate: {planetDetails.climate}</p>
            <p>Terrain: {planetDetails.terrain}</p>
            <p>Population: {planetDetails.population}</p>
            <p>Diameter: {planetDetails.diameter}</p>
            <p>Gravity: {planetDetails.gravity}</p>
            <p>Rotation Period: {planetDetails.rotation_period}</p>
            <p>Orbital Period: {planetDetails.orbital_period}</p>
            <p>Surface Water: {planetDetails.surface_water}</p>
            <Link to={"/planets"}>    
                <button className="btn btn-light">Back to Planets</button>
            </Link>
        </div>

    )
}