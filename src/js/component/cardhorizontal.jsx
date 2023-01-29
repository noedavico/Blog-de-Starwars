import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/hombre.jpg";

export const CardHorizontal = (props) => {
    return (
<div className="card mb-3 text-center p-5 m-5" style={{maxWidth: "auto"}}>
        <div className="row">
          <div className="col-xs-12 col-md-4 col-4">
            <img src={logo} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-xs-12 col-md-8 col-8">
            <div className="card-body">
              <h1 className="fs-1">{props.nombre}</h1>
              <p className="card-text"> {props.descripcion}</p>
        </div>
        </div>
        <span className="border border-warning"></span>
        </div>
              <div className="container text-center text-white border-top-warning ">
                <div className="row border-top-warning">
                <div className="col">Name <br />{props.nombre} </div>
                <div className="col">Birth Year <br /> {props.nacimiento}</div>
                <div className="col">Gender <br />{props.sexo}</div>
                <div className="col">Height <br />{props.altura}</div>
                <div className="col">Skin Color <br />{props.pelo}</div>
                <div className="col">Eye Color <br />{props.ojos}</div>
              </div>
            </div>
          </div>  
	);
};

