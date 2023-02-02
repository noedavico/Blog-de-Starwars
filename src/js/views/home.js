import "../../styles/home.css";
import Card from "../component/card.jsx";
import Card2 from "../component/card2.jsx";
import Card3 from "../component/card3.jsx";
import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";

export const Home = () => {

	const[infoPersonaje,setInfoPersonaje] = useState({})
    const[infoPlanetas,setInfoPlanetas] = useState ({})
	const[infoVehiculos,setInfoVehiculos] = useState ({})

	function obtenerInfoPersonajes() {
		fetch("https://swapi.dev/api/people")
		.then(res => res.json())
		.then(data => setInfoPersonaje(data.results))
		.catch(err => console.error(err))
	}
	
	function obtenerInfoPlanetas() {
		fetch("https://swapi.dev/api/planets")
		.then(res => res.json())
		.then(data => setInfoPlanetas(data.results))
		.catch(err => console.error(err))
	}
    
	function obtenerInfoVehiculos() {
		fetch("https://www.swapi.tech/api/vehicles/")
		.then(res => res.json())
		.then(data => setInfoVehiculos(data.results))
		.catch(err => console.error(err))
	}
	
	useEffect(()=>{
		obtenerInfoPersonajes()
		obtenerInfoPlanetas()
		obtenerInfoVehiculos()
	},[])


return(

	<div className="container ">
		<h1 className="text-center bg-7 mt-5 text-warning"> <strong>Characters </strong></h1>
		<div className="container-flex text-center mt-5 d-flex overflow-auto border border-warning">
		{infoPersonaje.length > 0 ? infoPersonaje.map((item,index)=><Card key={index++} id={index++} nombre={item.name} gender={item.gender} hairColor={item.hair_color} eyesColor={item.eye_color} />): null}
		</div>
		<h1 className="text-center bg-7 mt-5 text-warning"><strong>Planets</strong></h1>
		<div className="container-flex text-center mt-5 d-flex overflow-auto border  border-warning">
		{infoPlanetas.length > 0 ? infoPlanetas.map((item,index)=><Card2 key={index++} id={index++} nombre={item.name} poblacion={item.population} terreno={item.terrain}  />): null}
		</div>
		<h1 className="text-center bg-7 mt-5 text-warning"><strong>Vehicles</strong></h1>
		<div className="container-flex text-center mt-5 d-flex overflow-auto  border border-warning">
		{infoVehiculos.length > 0 ? infoVehiculos.map((item,index)=><Card3 key={index++} id={item.uid} nombre={item.name} pasajeros={item.passengers}  velocidad={item.max_atmosphering_speed}  />): null}
		</div>
	</div>
);
}

