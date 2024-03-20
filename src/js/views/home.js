import React, { useContext , useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { AppContext } from "../layout";
import { handleGetFavs } from "../component/login.jsx"


export const Home = () => {
	const { favorites, setFavorites, user } = useContext(AppContext)
	return (
		<div className="container-fluid text-center mt-5">
		<div className="row">
			<div className="col-12 image">
				<h1 style={{fontSize: "48px"}}>Test Landing Page</h1>
				<img src="https://lumiere-a.akamaihd.net/v1/images/dark-forces-remastered-hero-mobile_6547fb29.jpeg?region=0,0,1280,720&width=960" />
			</div>
		</div>			
		<div className="row">
			<div className="col-12">
				<Link to={"/character"}>		
					<button className="btn btn-light">Characters</button>
				</Link>
				<Link to={"/planets"}>
					<button className="btn btn-light">Planets</button>
				</Link>
			</div>
		</div>
	</div>
	)
}