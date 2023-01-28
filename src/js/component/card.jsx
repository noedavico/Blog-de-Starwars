import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/hombre.jpg";


const Card = (props) => {
	return (
     <div className="container col-xs-12 col-md-4 col-3 m-2">
		  <div className="card" style={{width: "18rem"}}>
         <img src={logo} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h5 className="card-title">{props.nombre} </h5>
          <p className="card-text">
            <br /> Gender:{props.gender}
            <br /> Hair Color: {props.hairColor}
            <br /> Eye Color:  {props.eyesColor}
          </p>
          
          <Link to={"/single/"+props.id}  className="btn btn-outline-primary me-4 ms-3">Learn More!</Link>
         
         <button type="button" className="btn btn-outline-warning ms-5"><i className="fa fa-heart" /></button>
         </div>
     </div>
			</div>
		
	);
};

export default Card