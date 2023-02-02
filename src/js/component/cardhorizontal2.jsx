import React from "react";
import { Link } from "react-router-dom";

export const CardHorizontal2= (props) => {
    return (
<div className="card mb-3 text-center p-5 m-5" style={{maxWidth: "auto"}}>
        <div className="row">
          <div className="col-12 col-md-6 m-auto p-auto">
          <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+props.id+".jpg"} className="m-3 auto" style={{width: "250px"}}/>
          </div>
          <div className="col-12 col-md-6 m-auto p-auto">
            <div className="card-body">
              <h1 className="fs-1">{props.nombrevehiculo}</h1>
              <p className="card-text"> {props.descripcion}</p>
        </div>
        </div>
        <span className="border border-warning"></span>
        </div>
              <div className="ow text-center text-white mb-3 border-top-warning">
                <div className="row border-top-warning">
                <div className="col">Name <br />{props.nombrevehiculo} </div>
                <div className="col">Model <br /> {props.model}</div>
                <div className="col">Length <br />{props.length}</div>
                <div className="col">Passengers <br />{props.passengers}</div>
                <div className="col">Speed <br />{props.max_atmosphering_speed+"km/h"}</div>
                <div className="col">Crew <br />{props.crew}</div>
              </div>
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

