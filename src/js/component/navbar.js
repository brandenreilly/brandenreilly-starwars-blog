import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../layout";

export const Navbar = () => {
	const { favorites , setFavorites } = useContext(AppContext)
	const deleteFavorite = (index) => {
        var newFavorites = favorites.filter((element, ind)=>{
            return ind != index
    })
    setFavorites(newFavorites)
    };
	return (
		<nav className="navbar navbar-light mb-3">
			<div className="row w-100">
				<div className="col-4 testPadding d-flex justify-content-start align-items-center">
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
				<div className="col-4 testPadding logoIMG d-flex justify-content-center">
					<Link to="/">
						<span className="navbar-brand mb-0 h1"><img height={80} width={185} src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"></img></span>
					</Link>
				</div>
				<div className="col-4 mx-auto testPadding d-flex justify-content-end align-items-center">
					<div class="btn-group">
  						<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    						Favorites
  						</button>
  						<div class="dropdown-menu" style={{display: favorites.length == 0 ? "none" : ""}}>
    						{
								favorites.map((arrayItem , index)=>{
									return <a className="dropdown-item">{index + 1}. {arrayItem.name} <i class="bi bi-trash-fill" style={{float: "right"}} onClick={()=>{deleteFavorite(index)}}></i></a>
								})
							}
   						<div class="dropdown-divider"></div>
						    <button class="dropdown-item text-danger" onClick={()=>{setFavorites([])}}>Delete Favorites</button>
  						</div>
					</div>
						<Link to="/login">
							<button className="btn btn-light">Login</button>
						</Link>
				</div>
			</div>
			<div className="row w-100">
				<div className="col-12 d-flex justify-content-center">
					<div class="dropdown">
    					<button class="btn dropbtn" style={{color: "white"}}>News + Features 
      						<i class="fa fa-caret-down"></i>
    					</button>
    					<div class="dropdown-content">
      						<a href="#">Link 1</a>
      						<a href="#">Link 2</a>
      						<a href="#">Link 3</a>
    					</div>
  					</div>
					  <div class="dropdown">
    					<button class="btn dropbtn" style={{color: "white"}}>Video 
      						<i class="fa fa-caret-down"></i>
    					</button>
    					<div class="dropdown-content">
      						<a href="#">Link 1</a>
      						<a href="#">Link 2</a>
      						<a href="#">Link 3</a>
    					</div>
  					</div>
					  <div class="dropdown">
    					<button class="btn dropbtn" style={{color: "white"}}>Films 
      						<i class="fa fa-caret-down"></i>
    					</button>
    					<div class="dropdown-content">
      						<a href="#">Link 1</a>
      						<a href="#">Link 2</a>
      						<a href="#">Link 3</a>
    					</div>
  					</div> 
					  <div class="dropdown">
    					<button class="btn dropbtn" style={{color: "white"}}>Dropdown 
      						<i class="fa fa-caret-down"></i>
    					</button>
    					<div class="dropdown-content">
      						<a href="#">Link 1</a>
      						<a href="#">Link 2</a>
      						<a href="#">Link 3</a>
    					</div>
  					</div> 
					  <div class="dropdown">
    					<button class="btn dropbtn" style={{color: "white"}}>Dropdown 
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
