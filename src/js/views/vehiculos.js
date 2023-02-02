import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardHorizontal2 } from "../component/cardhorizontal2.jsx";

export const Vehiculos = props => {
	const { store, actions } = useContext(Context);
	const[infoVehiculos, setInfoVehiculos]=useState({})
	const params = useParams();

	function obtenerInfoVehiculos() {
		fetch("https://www.swapi.tech/api/vehicles/"+params.theid)
		.then(res => res.json())
		.then(data => setInfoVehiculos(data.result))
		.catch(err => console.error(err))
	}
 console.log(infoVehiculos.description)
	useEffect(()=>{
		obtenerInfoVehiculos()
	},[])

    return (
        <div className="container ">
              <CardHorizontal2 nombrevehiculo={infoVehiculos.properties?.name}
            descripcion={infoVehiculos.description}
            model={infoVehiculos.properties?.model}
            length={infoVehiculos.properties?.length}
            passengers={infoVehiculos.properties?.passengers}
             speed={infoVehiculos.properties?.rmax_atmosphering_speed}
             crew={infoVehiculos.properties?.crew}
			 id={params.theid}/>
            
        </div>
	);
};

Vehiculos.propTypes = {
	match: PropTypes.object
};

