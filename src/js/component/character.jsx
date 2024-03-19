import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../layout";

export const CharacterCard = () => {
    const { favorites, setFavorites, user } = useContext(AppContext)
    const [newCharacters, setNewCharacters] = useState([]);
    const [singleChar, setSingleChar] = useState([]);
    useEffect(() => {
        fetch("https://www.swapi.tech/api/people")
            .then(resp => resp.json())
            .then(data => setNewCharacters(data.results))
    }, [])
    const cardImgUrl = "https://placehold.jp/150x150.png";
    const handleNewFav = (char) => {
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: user[0].id,
                name: char.name
            })
        }
        fetch("https://silver-umbrella-x55g959wj69rcvj5p-3000.app.github.dev/favorites", options)
            .then(resp => resp.json())
            .then(data => data)
    }

    return (
        <div className="d-flex row justify-content-center">
            {newCharacters.map((arrayItem, index) => {
                return (
                    <div key={index} className="col-2 mx-2 mt-4 d-flex justify-content-center">
                        <div className="card" style={{ width: "12rem" }} >
                            <Link to={{ pathname: '/character/' + arrayItem.uid }} state={{ character: arrayItem, details: singleChar, imgUrl: cardImgUrl }}>
                                <img src={cardImgUrl} className="card-img-top" alt="placeholder" />
                            </Link>
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <p className="card-text" style={{ color: "black" }}>{arrayItem.name}</p>
                                <button className="btn btn-dark text-light" onClick={() => {
                                    var result = favorites.find((elem) => {
                                        return elem.name == arrayItem.name
                                    })
                                    if (!result) {
                                        let newFavorite = [...favorites, { name: arrayItem.name }]; setFavorites(newFavorite); handleNewFav(arrayItem)
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
    )
};