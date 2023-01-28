import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo1.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<p>.
			<img src={logo} className="m-3 auto" style={{width: "150px"}}/>
		</p>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button  type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split me-4 ps-3 fs-4" style={{height:"50px"}}> Favorites <span className="fs-5 badge bg-secondary mx-2 ">  4  </span></button>
					
					<ul className="dropdown-menu">
                    {/* <li> <link className="dropdown-item" href="#">Vista detalle</link></li> */}
                   </ul>
				</Link>
			</div>
		</nav>
	);
};
