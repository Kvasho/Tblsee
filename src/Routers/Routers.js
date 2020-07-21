import React from "react";
import { Route, Switch }    from "react-router-dom";

import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Gallery from "../Pages/Gallery";
import Landing from "../Pages/Landing";
import Location from "../Pages/Location";
import Restaurant from "../Pages/Restaurant";
import Rooms from "../Pages/Rooms";
import Luxury from "../Pages/Luxury";
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