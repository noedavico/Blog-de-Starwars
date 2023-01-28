import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";

export const Home = () => {

	const[personajes,setPersonajes] = useState([])
	const[infoPersonaje,setInfoPersonaje] = useState({})
   

	function obtenerPersonajes() {
	fetch("https://www.swapi.tech/api/people/",{
		method: 'GET'
	})
	.then(res => res.json())
	.then(data => setPersonajes(data.results))
	.catch(err => console.error(err))
	}

	function obtenerinfoPersonaje() {
		fetch("https://swapi.dev/api/people")
		.then(res => res.json())
		.then(data => setInfoPersonaje(data.results))
		.catch(err => console.error(err))
	}

	
	useEffect(()=>{
		obtenerPersonajes()
		obtenerinfoPersonaje()
	},[])

console.log(personajes);
console.log(infoPersonaje);

return(
	<div className="container">
		<h1 className="text-center fs-1 mt-5 text-danger">Characters</h1>
		<div className="container-flex text-center mt-5 d-flex overflow-auto">
		{/* {personajes.map((item)=><Card key={item.uid} nombre={item.name} id={item.uid} />)} */}
		{infoPersonaje.length > 0 ? infoPersonaje.map((item,index)=><Card key={index++} nombre={item.name} gender={item.gender} hairColor={item.hair_color} eyesColor={item.eye_color}/>): null}
		</div>
		<h1 className="text-center fs-1 mt-5 text-danger">Planets</h1>
		<div className="container-flex text-center mt-5 d-flex overflow-auto">
		<Card/>
		</div>
		<h1 className="text-center fs-1 mt-5 text-danger">Vehicles</h1>
		<div className="container-flex text-center mt-5 d-flex overflow-auto">
		<Card/>
		</div>
	</div>
);
}

