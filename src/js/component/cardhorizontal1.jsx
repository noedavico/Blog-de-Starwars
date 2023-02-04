import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardHorizontal1= (props) => {
  const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params.theid); 
	console.log(params);

	
	useEffect(()=>{
		actions.loadinfoPlanetas(params.theid)
	},[])
	
    return (
<div className="card mb-3 text-center p-5 m-5" style={{maxWidth: "auto"}}>
        <div className="row">
          <div className="col-12 col-md-6 m-auto p-auto">
          <img src={"https://starwars-visualguide.com/assets/img/planets/"+params.theid+".jpg"} className="m-3 auto img-fluid " style={{width: "250px"}} alt="..."/>
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

