import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useSearchParams } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CharacterCard } from "./component/character.jsx";
import { DetailsPage } from "./component/details.jsx";
import { PlanetsPage } from "./component/planets.jsx";
import { PlanetDetails } from "./component/planetdetails.jsx";
import { LoginPage } from "./component/login.jsx";
import { SignUp } from "./component/signup.jsx";

// 1. Fetch "people" from API
// 2. Set "people" from API inside a state hook/variable array.
// 3. create card component inside individual .jsx for displaying char. button that links -> details
// 4. Map thru all characters and call card component. pass down props.
// 5. Clickable cards - expands into a whole new view component ("Details") to show all details about a char.
// 6. 
export const AppContext = createContext(null);
//create your first component
const Layout = () => {
	const [favorites , setFavorites] = useState([]);
	const [user, setUser] = useState({
	})
	const [userid, setUserid] = useState([])
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<AppContext.Provider value={{ favorites, setFavorites, user, setUser, userid, setUserid}}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character" element={<CharacterCard />} />
						<Route path="/character/:charid" element={<DetailsPage />} />
						<Route path="/planets" element={<PlanetsPage />} />
						<Route path="/planets/:charid" element={<PlanetDetails />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignUp/>} />
						<Route path="*" element={<h1 className="text-center">These are not the droids you are looking for...</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
			</AppContext.Provider>
		</div>
	);
};

export default injectContext(Layout);
