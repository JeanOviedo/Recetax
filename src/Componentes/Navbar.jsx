
import React, {Fragment, useRef, useState} from "react";
//import Logo from "../logo.png";
import { useDispatch} from "react-redux";
import {Link , useLocation} from "react-router-dom";
//import {ActionBuscar} from "../Redux/Actions";


export default function Navbar() {
  const location = useLocation();
  console.log(location)
  const dispatch = useDispatch();
    const [buscar, setBuscar] = useState("");

   


    return (<header className="navbar">
        <div className="logodiv"> {" "}
            <Link to="/"> {" "}
                <img id="logo"
                    src="{Logo}"
                    className="logo"
                    alt=""/></Link>
        </div>
        <nav className="logoder">
            <ul className="menu">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/">Platos</Link>
                </li>


                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
               
               
               
                {/* <button className="buscarboton">Buscar</button> */}
            </ul>

           


        </nav>
    </header>);
}
