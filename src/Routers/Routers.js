import React, {Suspense} from "react";

// PACKAGES
import { Route, Switch }    from "react-router-dom";


// PAGES
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import Gallery from "../Pages/Gallery/Gallery";
import Landing from "../Pages/Landing/Landing";
import Location from "../Pages/Location/Location";
import Restaurant from "../Pages/Restaurant/Restaurant";
import Rooms from "../Pages/Rooms/Rooms";
import Luxury from "../Pages/Luxury/Luxury";

// COMPONENTS
import Footer from "../Components/Footer";

const Routers = () => {
		return (
			<>
			<Switch>
				<Route
					path = "/aboutUs"
					exact
					component = { AboutUs }
				/>
				<Route
					path = "/"
					exact
					component = { Landing }
				/>
                <Route
					path = "/contact"
					exact
					component = { Contact }
				/>
                <Route
					path = "/gallery"
					exact
					component = { Gallery }
				/>
                <Route
					path = "/location"
					exact
					component = { Location }
				/>
                <Route
					path = "/restaurant"
					exact
					component = { Restaurant }
				/>
                <Route
					path = "/rooms"
					exact
					component = { Rooms }
				/>
				<Route
					path = "/luxury"
					exact
					component = { Luxury }
				/>
			</Switch>
			<Footer/>
			</>
		);
	}

export default Routers;