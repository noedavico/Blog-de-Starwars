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
import  Card2  from "../component/card2.jsx";

export const Single = () => {
	<div className="container">
		<Card2/>
	</div>
}

