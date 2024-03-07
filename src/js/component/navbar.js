import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
				<div className="col-4 d-flex justify-content-start">
					<ul>
						<li className="social-icon tiktok">
							<i class="bi bi-tiktok"></i>
						</li>
						<li className="social-icon instagram">
							<i class="bi bi-instagram"></i>
						</li>
						<li className="social-icon twitter">		
							<i class="bi bi-twitter-x"></i>
						</li>
						<li className="social-icon facebook">
							<i class="bi bi-facebook"></i>
						</li>
						<li className="social-icon youtube">
							<i class="bi bi-youtube"></i>
						</li>
						<li className="social-icon swkids separator-before">
							<a href="starwaskids.com"><img src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15" alt="starwarskids" /></a>
						</li>
					</ul>
					
				</div>
				<div className="col-4 d-flex justify-content-center">
					<Link to="/">
						<span className="navbar-brand mb-0 h1"><img height={80} width={185} src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"></img></span>
					</Link>
				</div>
				<div className="col-4 ml-auto d-flex justify-content-end">
							<button className="btn btn-light">Search</button>
						<Link to="/login">
							<button className="btn btn-light">Login</button>
						</Link>
				</div>
				<div className="col-12 d-flex justify-content-center">
					<ul>
						<li>Dropdown</li>
					</ul>
				</div>
		</nav>
	);
};
