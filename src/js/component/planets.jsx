import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../layout";

export const PlanetsPage = () => {
    const { favorites, setFavorites } = useContext(AppContext)
    const [planets, setPlanets] = useState([])
    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets")
            .then(resp => resp.json())
            .then(data => setPlanets(data.results))
    }, [])
    const cardImgUrl = "https://placehold.jp/150x150.png";
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
                                        var result = favorites.find((elem) => {
                                            return elem.name == arrayItem.name
                                        })
                                        if (!result) {
                                            let newFavorite = [...favorites, { name: arrayItem.name }];
                                            setFavorites(newFavorite)
                                        } else {
                                            var removeFavorites = favorites.filter((elem) => {
                                                return elem.name != arrayItem.name
                                            });
                                            setFavorites(removeFavorites)
                                        }
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