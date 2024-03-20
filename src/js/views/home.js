import React, { useContext , useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { AppContext } from "../layout";


export const Home = () => {
	const { favorites, setFavorites, user } = useContext(AppContext)
	const cardImgUrl = "https://placehold.jp/150x150.png";
	return (
		<div className="container-fluid text-center mt-5">
		<div className="row">
			<div className="col-12 mb-5">
				<h1 style={{fontSize: "48px"}}>Test Landing Page</h1>
			</div>
		</div>			
		<div className="row">
			<div className="col-12 d-flex justify-content-center">
				<Link to={"/character"}>
                        <div className="card mx-auto" style={{ width: "12rem" }} >
                            <img src={cardImgUrl} className="card-img-top" alt="placeholder" />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <p className="card-text" style={{ color: "black" }}>Characters</p>
                                <i class="fas fa-arrow-right" style={{color: "black"}} />
                            </div>
						</div>
				</Link>
				<Link to={"/planets"}>
					<div className="card mx-auto" style={{ width: "12rem" }} >
                        <img src={cardImgUrl} className="card-img-top" alt="placeholder" />
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <p className="card-text" style={{ color: "black" }}>Planets</p>
                            <i class="fas fa-arrow-right" style={{color: "black"}}/>
                        </div>
                    </div>
				</Link>
			</div>
		</div>
	</div>
	)
}