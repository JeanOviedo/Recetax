import React from "react";
import {Fragment} from "react";
import HomeImage from "../Icos/homeim.png"
// import Search from "./Search";
import {Link} from "react-router-dom";
export default function Landing() {
    return (
        <Fragment>

            <div className="container" id="container">
                <div id="left" className="left">
                    <h2>Encuentra tu plato fuerte
                    </h2>
                    <Link to="/">
                        <button className="boton">Ver Menús</button>
                    </Link>
                    <Link to="/contacto">
                        <button className="boton">Contacto</button>
                    </Link>
                </div>

                <div id="right" className="right">
                    <img src={HomeImage}
                        className="Ima"></img>

                </div>

            </div>

            <div className="container" id="container">

                <div id="izquierda" className="izquierda">
                    <img src="{Ima2}" className="Ima2"></img>
                </div>
                <div id="right" className="derecha">

                    <h2>Comienza
                    </h2>
                    <p>La app tiene un campo de búsqueda que permita buscar tu menú favorito.
                        <br></br>
                        <br></br>
                        mostrando de forma simple los resultados de la búsqueda.</p>


                </div>
            </div>

        </Fragment>
    );
}
