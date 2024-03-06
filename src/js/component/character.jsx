import React , { useState , useEffect } from "react";
import { Link } from "react-router-dom";

export const CharacterCard = () => {
    const [newCharacters,setNewCharacters] = useState([]);
    useEffect(()=>{
        fetch("https://swapi.dev/api/people")
        .then(resp => resp.json())
        .then(data => setNewCharacters(data.results))
    })
    const cardImgUrl = "https://placehold.jp/150x150.png"; 
    return (
        <div className="d-flex row justify-content-center">
            {newCharacters.map((arrayItem,index)=>{
                return (
                    <div key={index} className="col-2 mx-2 mt-4">
                        <Link to={{ pathname: '/character/' + index}} state={{character: arrayItem , imgUrl: cardImgUrl}}>
                        <div className="card" style={{ width: "12rem" }}>
                            <img src={cardImgUrl} className="card-img-top" alt="placeholder" />
                            <div className="card-body">
                                <p className="card-text" style={{color: "black"}}>{arrayItem.name}</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
};