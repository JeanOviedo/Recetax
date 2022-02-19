import React, { Fragment, useState } from "react";

import { ElAddToken } from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
    const dispatch = useDispatch();
  let modaldata = useSelector((state) => state.modaldata);
  const [email2, setEmail] = useState("");
  const [pass2, setPass] = useState("");


  function handleClick(evento) {
    evento.preventDefault();
    dispatch(ElAddToken(email2, pass2));
  }

  function handleCambioEmail(event) {
    event.preventDefault();
    setEmail(event.target.value);
  }

  
  function handleCambioPass(event) {
    event.preventDefault();
    setPass(event.target.value);
  }
  return (
    <Fragment>
      <div className="modal">

        <form onSubmit={handleClick}>
            
          <div className="input-container">
            <label>Username</label>
            <input
              type="email"
              onChange={(event) => handleCambioEmail(event)}
            
              name="email"
              id="email"
              required
            />
          </div>

          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              name="pass"
              onChange={(event) => handleCambioPass(event)}
           
              id="pass"
              required
            />
          </div>

          <div >
            <input  className="buscarboton"type="submit" />
          </div>
        </form>
      </div>
    </Fragment>
  );
}
