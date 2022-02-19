import React, { Fragment, useState } from "react";

import { Modal} from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
    const dispatch = useDispatch();
  let modalmsg= useSelector((state) => state.modal.msg);
  const [email2, setEmail] = useState("");
  const [pass2, setPass] = useState("");


  function handleClick(evento) {
    evento.preventDefault();
    dispatch(Modal(false));
  }

 
  return (
    <Fragment>
      <div className="modal">

      <h1>{modalmsg}</h1>
          


<button Onclick={handleClick} className="buscarboton"> Cerrar</button>
       
            
          </div>
        
    </Fragment>
  );
}
