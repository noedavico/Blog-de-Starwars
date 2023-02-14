import { Link } from "react-router-dom";
import React, {useContext, useState, useEffect}  from "react";
import { Context } from "../store/appContext";

const Card2 = (props) => {
  const { store, actions } = useContext(Context);

	return (
     <div className="col">
		  <div className="card card-cover text-bg-dark" style={{width: "15rem"}}>
      <img src={require(`../../img/${props.nombre}.jpg`).default} className="card-img-top mx-auto "  style={{height: "15rem"}} alt="..."/>
         <div className="card-body">
         <h4 className="card-title">{props.nombre} </h4>
          <p className="d-none d-sm-none d-md-block">
            <strong> Population: </strong>{props.poblacion}  <br />
            <strong> Terrain: </strong> {props.terreno} <br /> 
          </p>
          <div className="row">
						<div className="col-6">
          <Link to={"/planeta/"+props.id}  className="btn  btn-outline-warning  ">Learn More!</Link>
          </div>
          <div className="col-6">
         <button type="button" onClick={() => actions.agregarFavoritos({name:props.nombre, id:props.id, categoria:props.ruta})} className="btn btn-outline-warning"><i className="fa fa-heart" /></button>
         </div>
      </div>
     </div>
     </div>
     </div>
	);
};

export default Card2