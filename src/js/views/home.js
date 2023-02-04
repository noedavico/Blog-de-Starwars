import "../../styles/home.css";
import Card from "../component/card.jsx";
import Card2 from "../component/card2.jsx";
import Card3 from "../component/card3.jsx";
import React, {useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
console.log(store)

return(

	<div className="container ">
		<h1 className="text-center bg-7 mt-5 text-warning"> <strong>Characters</strong></h1>
		<div className="container-flex text-center mt-5 d-flex overflow-auto border border-warning">
		{store.personajes.length > 0 ? store.personajes.map((item, index)=> <Card key={index++} id={index++} nombre={item.name} gender={item.gender} hairColor={item.hair_color} eyesColor={item.eye_color} />): null}
		</div>
		<h1 className="text-center bg-7 mt-5 text-warning"><strong>Planets</strong></h1>
		<div className="container-flex text-center mt-5 d-flex overflow-auto border  border-warning">
		{store.planetas.length > 0 ? store.planetas.map((item,index)=><Card2 key={index++} id={index++} nombre={item.name} poblacion={item.population} terreno={item.terrain}  />): null}
		</div>
		<h1 className="text-center bg-7 mt-5 text-warning"><strong>Vehicles</strong></h1>
		<div className="container-flex text-center mt-5 d-flex overflow-auto  border border-warning">
		{store.vehiculos.length > 0 ? store.vehiculos.map((item)=><Card3 key={item.uid} id={item.uid} nombre={item.name}  />): null}
		</div>
	</div>
);
}

