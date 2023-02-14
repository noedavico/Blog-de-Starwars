import { Link } from "react-router-dom";
import React, {useContext, useState, useEffect}  from "react";
import { Context } from "../store/appContext";

const Card = (props) => {

const { store, actions } = useContext(Context);

	return (
     <div className="col me-2">
		  <div className=" card card-cover text-bg-dark" style={{width: "15rem"}}>
      <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.id+".jpg"}  className="img-fluid"  style={{height: "18rem"}}alt="..."/>
         <div className="card-body">
         <h4 className="card-title">{props.nombre} </h4>
          <p className="d-none d-sm-none d-md-block">
          <strong>  Gender: </strong>{props.gender} <br />
						<strong> Hair Color: </strong> {props.hairColor} <br />
						<strong> Eye Color: </strong>  {props.eyesColor}
          </p>
          <div className="row">
						<div className="col-6">
          <Link to={"/personajes/"+props.id}  className="btn  btn-outline-warning">Learn More!</Link>
          </div>
          <div className="col-6">
         <button type="button" onClick={() => actions.agregarFavoritos({name:props.nombre, id:props.id, categoria:props.ruta})} className="btn btn-outline-warning"><i className="fa fa-heart" /></button>
         {/* boton asociado a la funcion agregar favoritos que se muestran en navbar, le paso props id y cateogoria para formar la ruta y de cada item acceder a la vista detallada*/}
         </div>
      </div>
     </div>
     </div>
     </div>
    
	);
};

export default Card