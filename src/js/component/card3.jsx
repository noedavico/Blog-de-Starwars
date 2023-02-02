import React from "react";
import { Link } from "react-router-dom";


const Card3 = (props) => {
	return (
     <div className="col gap-3  ">
		  <div className="card" style={{width: "22rem"}}>
      <img src={require(`../../img/${props.nombre}.jpg`).default} className="card-img-top" style={{height: "22rem", width: "100%"}} alt="..."/>
         <div className="card-body">
         <h4 className="card-title">{props.nombre} </h4>
          <p className="card-text">
            {/* <br /> <strong> Passengers:</strong> {props.pasajeros}
            <br /> <strong> Speed:</strong>   {props.velocidad+"km/h"} */}
          </p>
          <div className="row">
						<div className="col-6">
          <Link to={"/vehiculos/"+props.id}  className="btn  btn-outline-warning me-4 ms-3">Learn More!</Link>
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

export default Card3