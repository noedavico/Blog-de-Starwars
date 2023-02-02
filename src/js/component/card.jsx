import { Link } from "react-router-dom";
import React, {useState, useEffect}  from "react";


const Card = (props) => {
// const [arrayFavorito, setArrayFavoritos] = useState ([]);
// const nombre = props.nombre .
// const agregarFavorito = () => {
//   setArrayFavoritos ([arrayFavorito.concat(nombre)])
// };

	return (
     <div className="col ">
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
         <button type="button" className="btn btn-outline-warning ms-5"><i className="fa fa-heart" /></button>
         </div>
      </div>
     </div>
     </div>
     </div>
    
	);
};

export default Card