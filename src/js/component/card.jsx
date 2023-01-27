import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";


const Card = () => {
	return (
     <div className="ml-auto">
		  <div className="card" style={{width: "18rem"}}>
         <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..."/>
         <div className="card-body">
         <h5 className="card-title">Nombre </h5>
          <p className="card-text">
            <br /> Gender: xxxxxx
            <br /> Hair Color: xxxxx
            <br /> Eye Color: xxxx
          </p>
          
         <a href="#" className="btn btn-outline-primary me-4 ms-3">Learn More!</a>
         <button type="button" class="btn btn-outline-warning ms-5"><i className="fa fa-heart" /></button>
         </div>
     </div>
			</div>
		
	);
};

export default Card