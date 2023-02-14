import React, {useContext, useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Card3 = (props) => {
  const { store, actions } = useContext(Context);

	return (
     <div className="col">
		  <div className="card card-cover text-bg-dark " style={{width: "15rem"}}>
      <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+props.id+".jpg"} className="card-img-top mx-auto "  style={{height: "18rem"}} alt="..."/>
         <div className="card-body">
         <h4 className="card-title">{props.nombre} </h4>
          <p className="d-none d-sm-none d-md-block">
            <br /> <strong> Passengers:</strong> {store.infoVehiculos.properties?.passengers}
            <br /> <strong> Speed:</strong>   {props.max_atmosphering_speed+"km/h"}
          </p>
          <div className="row">
						<div className="col-6">
          <Link to={"/vehiculos/"+props.id}  className="btn  btn-outline-warning ">Learn More!</Link>
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

export default Card3