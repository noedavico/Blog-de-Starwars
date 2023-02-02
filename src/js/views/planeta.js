import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardHorizontal1 } from "../component/cardhorizontal1.jsx";

export const Planetas = () => {
	const { store, actions } = useContext(Context);
	const[infoPlaneta, setInfoPlaneta]=useState({})
	const params = useParams();
	console.log(params.theid); 
	console.log(params);

	function obtenerinfoPlaneta() {
		fetch("https://www.swapi.tech/api/planets/"+params.theid)
		.then(res => res.json())
		.then(data => setInfoPlaneta(data.result))
		.catch(err => console.error(err))
	}

	useEffect(()=>{
		obtenerinfoPlaneta()
	},[])
    return (
        <div className="container ">
              <CardHorizontal1 nombreplaneta={infoPlaneta.properties?.name}
			 id={params.theid}
             descripcionplaneta={infoPlaneta.description}
             climate={infoPlaneta.properties?.climate}
             population={infoPlaneta.properties?.population}
             orbital={infoPlaneta.properties?.orbital_period}
             rotation={infoPlaneta.properties?.rotation_period}
             diameter={infoPlaneta.properties?.diameter}/>
            
        </div>
	);
};

Planetas.propTypes = {
	match: PropTypes.object
};