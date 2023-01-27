import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<p>.
			<img src={logo} className="ms-4 auto" style={{width: "80px"}}/>
		</p>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button  type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split me-4 ">Favorites</button>
					<ul class="dropdown-menu">
                    {/* <li> <link class="dropdown-item" href="#">Vista detalle</link></li> */}
                   </ul>
				</Link>
			</div>
		</nav>
	);
};
