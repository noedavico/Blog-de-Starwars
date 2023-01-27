import React, {
    useState,
    useEffect,
    useContext
} from "react";
import PropTypes from "prop-types";
import {
    Link,
    useParams
} from "react-router-dom";
import {
    Context
} from "../store/appContext";
import logo from "../../img/logo.png";

 const Card2 = () => {
    return (
	<div className="card mb-3 text-center p-5 m-5" style={{maxWidth: "auto"}}>
	<div className="row">
	  <div className="col-xs-12 col-md-4 col-4">
        <img src={logo} className="img-fluid rounded-start" alt="..."/>
      </div>
	  <div className="col-xs-12 col-md-8 col-8">
		<div className="card-body">
		  <h1 className="fs-1">Card title</h1>
		  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint inventore aperiam voluptatem quos voluptas aspernatur incidunt praesentium recusandae nemo, explicabo nobis veniam iure repellat reprehenderit animi dolorum unde eos? This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
	</div>
    </div>
    <span class="border border-danger"></span>
    </div>
          <div class="container text-center text-danger border-top-danger ">
          
            <div class="row border-top-danger">
            <div class="col">Name xxxxx </div>
            <div class="col">Birth Year xxxxxx</div>
            <div class="col">Gender xxxxx</div>
            <div class="col">Height xxxxx</div>
            <div class="col">Skin Color xxxxx</div>
            <div class="col">Eye Color xxxxx</div>
          </div>
		</div>
    
	  </div>  
    )
}
export default Card2