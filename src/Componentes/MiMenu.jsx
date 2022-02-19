import React, { Fragment, useEffect } from "react";
import {
  // ActionModal,
  ActionTodosMenu,  ActionMiMenu,
  //ActionLoading,
} from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
// import Modal from "./Modal";
// import Load from "./Load";
export default function MiMenus() {
  const todos= useSelector((state) => state.mimenu);

  const loading = useSelector((state) => state.loading);
  const login= useSelector((state) => state.login);
  const modal= useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();

   useEffect(() => {
    if (!todos.length) {
      dispatch(ActionTodosMenu());
   }
  }, [dispatch]);

 
  
  return (
    <Fragment>
      <br />

      <div class="container2" key={Math.random(5)}>
        {/* {loading === true ? (
          <center>
            <Load></Load>{" "}
          </center>
        ) : (
          ""
        )} */}
        
        {modal == true? <Modal></Modal> : ""}
   
     {console.log(todos, "TOFDOS FRONT")}
        {todos 
          ? todos.map((todos) => (
              <div
                className="card"
                key={Math.random(5)}
                // onClick={(event) => handleClick(event, menus.recipes)}
              >
                <div  key={Math.random(5)}> <h1> {todos.title}</h1>
                <button className="buscarboton">Quitar</button>
                <p>HealthScore : {todos.healthScore}</p>
                  <br />
                  <img src={todos.img} className="jugador" />
                  
                </div>{" "}
                
                
               
                <br />
                <br />
              </div>
            ))
          : (<div><br/><br/><h1>No se encontraron elementos</h1></div>)}
        <br />
      </div>
    </Fragment>
  );
}
