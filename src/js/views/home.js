import "../../styles/home.css";
import Card from "../component/card.jsx";
import Card2 from "../component/card2.jsx";
import Card3 from "../component/card3.jsx";
import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Search } from "../component/search.jsx";
export const Home = () => {
	const { store, actions } = useContext(Context);
 


return(
	<div className="conatiner m-auto">	
	<div class="row justify-content-center">
	<div className="col-sm-6 col-md-4 "> <Search/></div>
	</div>
		<h1 className="text-center fs-1 bg-7 mt-2 text-warning"> <strong> Characters</strong></h1>
		<div className=" row flex-nowrap overflow-auto border text-center border-warning m-4">
		{store.personajes.length > 0 ? store.personajes.map((item, index)=> <Card key={index++} id={index++} nombre={item.name} gender={item.gender} hairColor={item.hair_color} eyesColor={item.eye_color} ruta={"personajes"} />): null}
		</div>
		<h1 className="text-center fs-1  bg-7 my-2 text-warning"><strong>Planets</strong></h1>
		<div className=" row flex-nowrap overflow-auto border text-center border-warning m-4">
		{store.planetas.length > 0 ? store.planetas.map((item,index)=><Card2 key={index++} id={index++} nombre={item.name} poblacion={item.population} terreno={item.terrain} ruta={"planeta"}  />): null}
		</div>
		<h1 className="text-center  fs-1 bg-7 my-2 text-warning"><strong>Vehicles</strong></h1>
		<div className="row flex-nowrap overflow-auto border text-center border-warning m-4">
		{store.vehiculos.length > 0 ? store.vehiculos.map((item)=><Card3 key={item.uid} id={item.uid} nombre={item.name} ruta={"vehiculos"} />): null}
		</div>
	</div>
);
}

