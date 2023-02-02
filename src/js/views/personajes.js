import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardHorizontal } from "../component/cardhorizontal.jsx";

export const Personajes = () => {
	const { store, actions } = useContext(Context);
	const[infoPersonaje, setInfoPersonaje]=useState({})
	const params = useParams();


	function obtenerinfoPersonaje() {
		fetch("https://www.swapi.tech/api/people/"+params.theid)
		.then(res => res.json())
		.then(data => setInfoPersonaje(data.result))
		.catch(err => console.error(err))
	}

	useEffect(()=>{
		obtenerinfoPersonaje()
	},[])
	return (
        <div className="container ">
              <CardHorizontal nombre={infoPersonaje.properties?.name}
             descripcion={infoPersonaje.description}
             nacimiento={infoPersonaje.properties?.birth_year}
             sexo={infoPersonaje.properties?.gender}
             altura={infoPersonaje.properties?.height}
             pelo={infoPersonaje.properties?.hair_color}
             ojos={infoPersonaje.properties?.eye_color}
			 />
          </div>
	);
};

Personajes.propTypes = {
	match: PropTypes.object
};