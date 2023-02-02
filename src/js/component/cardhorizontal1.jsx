import React from "react";
import { Link } from "react-router-dom";

export const CardHorizontal1= (props) => {
    return (
<div className="card mb-3 text-center p-5 m-5" style={{maxWidth: "auto"}}>
        <div className="row">
          <div className="col-12 col-md-6 m-auto p-auto">
          <img src={"https://starwars-visualguide.com/assets/img/categories/planets"+props.id+".jpg"} className="card-img-top" style={{height: "22rem", width: "100%"}} alt="..."/>
          </div> 
          <div className="col-12 col-md-6 m-auto p-auto">
            <div className="card-body">
              <h1 className="fs-1">{props.nombreplaneta}</h1>
              <p className="card-text"> {props.descripcionplaneta}</p>
        </div>
        </div>
        <span className="border border-warning"></span>
        </div>
              <div className="row text-center text-white mb-3 border-top-warning ">               
                <div className="col">Name <br />{props.nombreplaneta} </div>
                <div className="col">Climate <br /> {props.climate}</div>
                <div className="col">Population <br />{props.population}</div>
                <div className="col">Orbital Period <br />{props.orbital}</div>
                <div className="col">Rotation Period <br />{props.rotation}</div>
                <div className="col">Diameter <br />{props.diameter}</div>
              </div>
              <div className="row">
				<Link to="/">
					<span className="btn btn-outline-warning" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
            </div>
	);
};

