import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardHorizontal = (props) => {
const { store, actions } = useContext(Context);
const params = useParams();


// llamo a la funcion loadin... declarada en flux la cual le paso como parametro params.theid (variable dinámica para conformar la URL en este caso para el fetch) y acedar a la info detallada de cada personaje
      useEffect (()=>{
            actions.loadinfoPersonajes(params.theid);
      },[])


    return (
<div className="container card text-center P-3 m-3" style={{maxWidth: "auto"}}>
        <div className="row">
          <div className="col-12 col-md-6 m-auto p-auto">
          <img src={"https://starwars-visualguide.com/assets/img/characters/"+params.theid+".jpg"} className="m-auto img-fluid rounded-start " style={{width: "250px"}}/>
          </div>
          <div className="col-12 col-md-6 m-auto p-auto">
            <div className="card-body">
              <h1 >{props.nombre}</h1>
              <p className="card-text">{props.descripcion}</p>       
              </div>
        </div>
        <span className="border border-warning"></span>
        </div>
              <div className="row text-center text-white mb-3 border-top-warning">               
                <div className="col">Name <br />{props.nombre} </div>
                <div className="col">Birth Year <br />{props.nacimiento}</div>
                <div className="col">Gender <br />{props.sexo}</div>
                <div className="col">Height <br />{props.altura}</div>
                <div className="col">Skin Color <br />{props.pelo}</div>
                <div className="col">Eye Color <br />{props.ojos}</div>
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

