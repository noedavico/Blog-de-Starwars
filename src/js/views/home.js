import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card.jsx";

export const Home = () => (
	<div className="container">
		<h1 className="text-center fs-1 mt-5 text-danger">Characters</h1>
		<div class="container-flex text-center mt-5 d-flex overflow-auto">
		<Card/>
		<Card/>
		<Card/>
		<Card/>
		<Card/>
		<Card/>
		
		</div>
		
		 
	</div>
);
