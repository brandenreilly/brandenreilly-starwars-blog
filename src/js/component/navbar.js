import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
				<div className="col-4 d-flex justify-content-start">
					<i class="fab fa-youtube fa-lg"></i>
				</div>
				<div className="col-4 d-flex justify-content-center">
					<Link to="/">
						<span className="navbar-brand mb-0 h1"><img height={100} width={125} src="https://static.vecteezy.com/system/resources/previews/027/127/457/non_2x/star-wars-logo-star-wars-icon-transparent-free-png.png"></img></span>
					</Link>
				</div>
				<div className="col-4 ml-auto d-flex justify-content-end">
						<button className="btn btn-light">Search</button>
						<button className="btn btn-light">Login</button>
				</div>
				<div className="col-12 d-flex justify-content-center">
					<ul>
						<li>Dropdown</li>
					</ul>
				</div>
		</nav>
	);
};
