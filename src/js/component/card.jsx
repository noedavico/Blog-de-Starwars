import { Link } from "react-router-dom";
import React, {useContext, useState, useEffect}  from "react";
import { Context } from "../store/appContext";

const Card = (props) => {

const { store, actions } = useContext(Context);



	return (
     <div className="col mx-2 ">
		  <div className="card" style={{width: "22rem"}}>
      <img src={require(`../../img/${props.nombre}.jpg`).default} className="card-img-top" style={{height: "22rem", width: "100%"}} alt="..."/>
         <div className="card-body">
         <h4 className="card-title">{props.nombre} </h4>
          <p className="card-text">
          <strong>  Gender: </strong>{props.gender} <br />
						<strong> Hair Color: </strong> {props.hairColor} <br />
						<strong> Eye Color: </strong>  {props.eyesColor}
          </p>
          <div className="row">
						<div className="col-6">
          <Link to={"/personajes/"+props.id}  className="btn  btn-outline-warning me-4 ms-3">Learn More!</Link>
          </div>
          <div className="col-6">
         <button type="button" onClick={() => actions.agregarFavoritos(props.nombre)} className="btn btn-outline-warning ms-5"><i className="fa fa-heart" /></button>
         </div>
      </div>
     </div>
     </div>
     </div>
    
	);
};

export default Card