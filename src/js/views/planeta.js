import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardHorizontal1 } from "../component/cardhorizontal1.jsx";

export const Planetas = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params.theid); 
	console.log(params);
	
	useEffect(()=>{
		actions.loadinfoPlanetas(params.theid)
	},[])
	
    return (
        <div className="container ">
              <CardHorizontal1 nombreplaneta={store.infoPlanetas.properties?.name}
			 id={params.theid}
             descripcionplaneta={store.infoPlanetas.description}
             climate={store.infoPlanetas.properties?.climate}
             population={store.infoPlanetas.properties?.population}
             orbital={store.infoPlanetas.properties?.orbital_period}
             rotation={store.infoPlanetas.properties?.rotation_period}
             diameter={store.infoPlanetas.properties?.diameter}/>
            
        </div>
	);
};

Planetas.propTypes = {
	match: PropTypes.object
};