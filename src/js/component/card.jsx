import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";


const Card = () => {
	return (
     <div className="container col-xs-12 col-md-4 col-3 m-2">
		  <div className="card" style={{width: "18rem"}}>
         <img src={logo} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h5 className="card-title">Nombre </h5>
          <p className="card-text">
            <br /> Gender: xxxxxx
            <br /> Hair Color: xxxxx
            <br /> Eye Color: xxxx
          </p>
          <Link to="/demo"> 
         <a href="#" className="btn btn-outline-primary me-4 ms-3">Learn More!</a>
         </Link>
         <button type="button" class="btn btn-outline-warning ms-5"><i className="fa fa-heart" /></button>
         </div>
     </div>
			</div>
		
	);
};

export default Card