import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../layout";

export const PlanetsPage = () => {
    const { favorites, setFavorites, user, planets, setPlanets } = useContext(AppContext)
    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets")
            .then(resp => resp.json())
            .then(data => setPlanets(data.results))
    }, [])
    const handleGetFavs = () => {
        fetch(`https://silver-umbrella-x55g959wj69rcvj5p-3000.app.github.dev/favorites/${user.id}`)
            .then(resp => resp.json())
            .then(data => setFavorites(data))
    }
    const cardImgUrl = "https://placehold.jp/150x150.png";
    const handleNewFav = (planet) => {
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: user.id,
                name: planet.name,
                planet_id: planet.uid,
                char_id: null,
                typeof: "planets"
            })
        }
        fetch("https://silver-umbrella-x55g959wj69rcvj5p-3000.app.github.dev/favorites", options)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                }
                else if (resp.status == 403) {
                    alert("Favorite Already Exists.")
                }
            })
            .then(data => data)
            .then(() => handleGetFavs())
    }
    return (
        <div className="text-center">
            <h1>Planets Page</h1>
            <div className="d-flex row justify-content-center">
                {planets.map((arrayItem, index) => {
                    return (
                        <div key={index} className="col-2 mx-2 mt-4 d-flex justify-content-center">
                            <div className="card" style={{ width: "12rem" }}>
                                <Link to={{ pathname: '/planets/' + arrayItem.uid }} state={{ planet: arrayItem, imgUrl: cardImgUrl }}>
                                    <img src={cardImgUrl} className="card-img-top" alt="placeholder" />
                                </Link>
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <p className="card-text" style={{ color: "black" }}>{arrayItem.name}</p>
                                    <button className="btn btn-dark text-light" onClick={() => {
                                        handleNewFav(arrayItem)
                                    }}><i class="bi bi-star-fill"></i></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}