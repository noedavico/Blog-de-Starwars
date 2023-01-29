import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Star-Wars-Logo-Transparent-PNG.png";

export const Navbar = () => {
	return (
		<nav className="navbar  mb-3">
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
		</nav>
	);
};
