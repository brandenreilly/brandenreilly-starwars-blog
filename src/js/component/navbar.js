import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../layout";

export const Navbar = () => {
	const { favorites , setFavorites , user } = useContext(AppContext)
	const handleDeleteFavs = (index) => {
		const options = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			},
		}
		fetch(`https://silver-umbrella-x55g959wj69rcvj5p-3000.app.github.dev/favorites/${user.id}/${favorites[index].id}`, options)
		.then(resp => {
			if(resp.ok){
				return resp.json()
			}
			else{
				console.log(resp.status)
			}
		})
		.then(data => setFavorites(data))
	}
	return (
		<nav className="navbar navbar-light mb-3">
			<div className="row w-100 mt-3">
				<div className="col testPadding d-flex justify-content-start align-items-center mx-4">
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
							<a href="https://www.starwarskids.com" target="_blank"><img src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15" alt="starwarskids" /></a>
						</li>
					</ul>
					
				</div>
				<div className="col testPadding logoIMG d-flex justify-content-center">
					<Link to="/">
						<span className="navbar-brand mb-0 h1"><img height={80} width={185} src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"></img></span>
					</Link>
				</div>
				<div className="col mx-4 testPadding d-flex justify-content-end align-items-center">
					<div class="btn-group mx-4">
  						<button type="button" class="favBtn btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    						FAVORITES
  						</button>
  						<div class="dropdown-menu" style={{display: favorites.length == 0 ? "none" : ""}}>
    						{
								favorites.map((arrayItem , index)=>{
									return <a className="dropdown-item">{index + 1}. {arrayItem.name} <i class="bi bi-trash-fill" style={{float: "right"}} onClick={()=>{handleDeleteFavs(index)}}></i></a>
								})
							}
   						<div class="dropdown-divider"></div>
						    <button class="dropdown-item text-danger" onClick={()=>{setFavorites([])}}>Delete Favorites</button>
  						</div>
					</div>
						<Link to="/login">
							<button className="loginBtn btn btn-light">LOG IN<i className="fas fa-sign-in-alt signInIcon"></i></button>
						</Link>
				</div>
			</div>
			<div className="row w-100 mt-3">
				<div className="col-12 d-flex justify-content-center">
					<div class="text-styling dropdown">
    					<button class="btn dropbtn" style={{color: "white"}}>NEWS + FEATURES 
      						<i class="fa fa-caret-down"></i>
    					</button>
    					<div class="dropdown-content">
      						<a href="#">Link 1</a>
      						<a href="#">Link 2</a>
      						<a href="#">Link 3</a>
    					</div>
  					</div>
					  <div class="text-styling dropdown">
    					<button class="btn dropbtn" style={{color: "white"}}>VIDEO 
      						<i class="fa fa-caret-down"></i>
    					</button>
    					<div class="dropdown-content">
      						<a href="#">Link 1</a>
      						<a href="#">Link 2</a>
      						<a href="#">Link 3</a>
    					</div>
  					</div>
					  <div class="text-styling dropdown">
    					<button class="btn dropbtn" style={{color: "white"}}>FILMS 
      						<i class="fa fa-caret-down"></i>
    					</button>
    					<div class="dropdown-content">
      						<a href="#">Link 1</a>
      						<a href="#">Link 2</a>
      						<a href="#">Link 3</a>
    					</div>
  					</div> 
					  <div class="text-styling dropdown">
    					<button class="btn dropbtn" style={{color: "white"}}>DROPDOWN 
      						<i class="fa fa-caret-down"></i>
    					</button>
    					<div class="dropdown-content">
      						<a href="#">Link 1</a>
      						<a href="#">Link 2</a>
      						<a href="#">Link 3</a>
    					</div>
  					</div> 
					  <div class="dropdown text-styling">
    					<button class="btn dropbtn" style={{color: "white"}}>DROPDOWN 
      						<i class="fa fa-caret-down"></i>
    					</button>
    					<div class="dropdown-content">
      						<a href="#">Link 1</a>
      						<a href="#">Link 2</a>
      						<a href="#">Link 3</a>
    					</div>
  					</div> 
				</div>
			</div>
		</nav>
	);
};
