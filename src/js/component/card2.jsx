import { Link } from "react-router-dom";
import React, {useContext, useState, useEffect}  from "react";
import { Context } from "../store/appContext";

const Card2 = (props) => {
  const { store, actions } = useContext(Context);

	return (
     <div className="col mx-2">
		  <div className="card" style={{width: "22rem"}}>
      <img src={require(`../../img/${props.nombre}.jpg`).default} className="card-img-top" style={{height: "22rem", width: "100%"}} alt="..."/>
         <div className="card-body">
         <h4 className="card-title">{props.nombre} </h4>
          <p className="card-text">
            <strong> Population: </strong>{props.poblacion}  <br />
            <strong> Terrain: </strong> {props.terreno} <br /> 
          </p>
          <div className="row">
						<div className="col-6">
          <Link to={"/planeta/"+props.id}  className="btn  btn-outline-warning me-4 ms-3">Learn More!</Link>
          </div>
          <div className="col-6">
         <button type="button" className="btn btn-outline-warning ms-5"><i className="fa fa-heart" /></button>
         </div>
      </div>
     </div>
     </div>
     </div>
	);
};

export default Card2