import { Link } from "react-router-dom";
import logo from "../../img/Star-Wars-Logo-Transparent-PNG.png";
import React, {useState, useEffect}  from "react";

export const Navbar = () => {
	return (
		<nav className="navbar col-xs-6  mb-3">
			<Link to="/">
			<p>.
			<img src={logo} className="m-3 auto" style={{width: "250px"}}/>
		</p>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button  type="button" className="btn btn-outline-warning dropdown-toggle dropdown-toggle-split me-4 ps-3 fs-4" style={{height:"50px"}}> Favorites <span className="fs-5 badge bg-secondary mx-2 text-warning ">  4  </span></button>
					
					<ul className="dropdown-menu">
                    {/* <li> <link className="dropdown-item" href="#">Vista detalle</link></li> */}
                   </ul>
				</Link>
			</div>
			{/* <div className="col-xs-6  ml-auto"> */}
{/* 				
					<button  type="button" className="btn btn-outline-warning dropdown-toggle dropdown-toggle-split me-4 ps-3 fs-4" style={{height:"50px"}}> Favorites <span className="fs-5 badge bg-secondary mx-2 text-warning ">  {arrayFavorito.length} </span></button>
					{/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							{/* {arrayFavorito.map((item, index) => {
								return (
									<div key={index} className="dropdown-item">
										<div className="row">
											<div className="col-9">{item.name}</div>
											</div>
									</div>
								);
							})} */}
				{/* </div> */}
		</nav>
	);
};
