import  Card2  from "../component/card2.jsx";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const[infoPersonaje, setInfoPersonaje]=useState({})
	const params = useParams();
	console.log(params.theid); 
	console.log(params);

	function obtenerinfoPersonaje() {
		fetch("https://www.swapi.tech/api/people/"+params.theid)
		.then(res => res.json())
		.then(data => setInfoPersonaje(data.result))
		.catch(err => console.error(err))
	}

	useEffect(()=>{
		obtenerinfoPersonaje()
	},[])
console.log(infoPersonaje)
console.log(infoPersonaje.description);    
console.log(infoPersonaje.properties);
console.log(infoPersonaje.properties?.name);

	return (
        <div className="card mb-3 text-center p-5 m-5" style={{maxWidth: "auto"}}>
        <div className="row">
          <div className="col-xs-12 col-md-4 col-4">
            <img src={logo} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-xs-12 col-md-8 col-8">
            <div className="card-body">
              <h1 className="fs-1">{infoPersonaje.properties?.name}</h1>
              <p className="card-text"> {infoPersonaje.description}</p>
        </div>
        </div>
        <span className="border border-danger"></span>
        </div>
              <div className="container text-center text-danger border-top-danger ">
                <div className="row border-top-danger">
                <div className="col">Name <br />{infoPersonaje.properties?.name} </div>
                <div className="col">Birth Year <br /> {infoPersonaje.properties?.birth_year}</div>
                <div className="col">Gender <br />{infoPersonaje.properties?.gender}</div>
                <div className="col">Height <br />{infoPersonaje.properties?.height}</div>
                <div className="col">Skin Color <br />{infoPersonaje.properties?.hair_color}</div>
                <div className="col">Eye Color <br />{infoPersonaje.properties?.eye_color}</div>
              </div>
            </div>
          </div>  
	);
};

Single.propTypes = {
	match: PropTypes.object
};

