import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1 style={{fontSize: "48px"}}>Test Landing Page</h1>
		<Link to={"/character"}>		
			<button className="btn btn-light">Characters</button>
		</Link><br/>
		<Link to={"/planets"}>
			<button className="btn btn-light">Planets</button>
		</Link>
	</div>
);
