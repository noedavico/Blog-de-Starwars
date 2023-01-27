import React, {
    useState,
    useEffect,
    useContext
} from "react";
import {
    Link
} from "react-router-dom";
import {
    Context
} from "../store/appContext";

import "../../styles/demo.css";
import  Card2  from "../component/card2.jsx";

export const Demo = () => {
    return ( 
        <div className="container">
        <Card2/>
        </div>
    );
};