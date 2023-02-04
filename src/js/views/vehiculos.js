import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardHorizontal2 } from "../component/cardhorizontal2.jsx";

export const Vehiculos = props => {
	const { store, actions } = useContext(Context);
  const params = useParams();
	console.log(params.theid); 
	console.log(params);

	
	useEffect(()=>{
		actions.loadinfoVehiculos(params.theid)
	},[])
 
    return (
        <div className="container ">
              <CardHorizontal2 nombrevehiculo={store.infoVehiculos.properties?.name}
            descripcion={store.infoVehiculos.description}
            model={store.infoVehiculos.properties?.model}
            length={store.infoVehiculos.properties?.length}
            passengers={store.infoVehiculos.properties?.passengers}
             speed={store.infoVehiculos.properties?.rmax_atmosphering_speed}
             crew={store.infoVehiculos.properties?.crew}
			 id={params.theid}
			 />
        </div>
	);
};

Vehiculos.propTypes = {
	match: PropTypes.object
};

