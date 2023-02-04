import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardHorizontal } from "../component/cardhorizontal.jsx";

export const Personajes = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params.theid); 
	console.log(params);

      useEffect (()=>{
            actions.loadinfoPersonajes(params.theid);
      },[])

	return (
        <div className="container ">
              <CardHorizontal nombre={store.infoPersonajes.properties?.name}
             descripcion={store.infoPersonajes.description}
             nacimiento={store.infoPersonajes.properties?.birth_year}
             sexo={store.infoPersonajes.properties?.gender}
             altura={store.infoPersonajes.properties?.height}
             pelo={store.infoPersonajes.properties?.hair_color}
             ojos={store.infoPersonajes.properties?.eye_color}
			 />
          </div>
	);
};

Personajes.propTypes = {
	match: PropTypes.object
};