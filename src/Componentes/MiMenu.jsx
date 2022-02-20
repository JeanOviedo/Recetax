import React, { Fragment, useEffect } from "react";
import {
  // ActionModal,
  ActionTodosMenu,
  QuitarDeMenu,
  // ActionLoading,
} from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
// import Modal from "./Modal";
// import Load from "./Load";
export default function MiMenus() {
  const todos = useSelector((state) => state.mimenu);

  const loading = useSelector((state) => state.loading);
  const login = useSelector((state) => state.login);
  const modal = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!todos.length) {
      dispatch(ActionTodosMenu());
    }
  }, [dispatch]);

  function Quitar(evento, id) {
    
    const index = todos.findIndex((prod) => prod.id === id); // use id instead of index
    if (index > -1) {
      dispatch(QuitarDeMenu(todos.filter((i) => i.id !== id)));
    }
  }

  return (
    <Fragment>
      <br />

      <div className="container2" key={Math.random(5)}>
        {" "}
        {/* {loading === true ? (
          <center>
            <Load></Load>{" "}
          </center>
        ) : (
          ""
        )} */}
        {modal == true ? <Modal></Modal> : ""}
        {console.log(todos, "TOFDOS FRONT")}
        {todos.length > 0 ? (
          todos.map((todos) => (
            <div
              className="card"
              key={todos.id}
              // onClick={(event) => handleClick(event, menus.recipes)}
            >
              <div key={Math.random(5)}>
                <h1> {todos.title}</h1>
                <button
                  className="buscarboton"
                  onClick={(event) =>Quitar(event, todos.id)}
                >
                  Quitar
                </button>
                <p>HealthScore : {todos.healthScore}</p>
                <br />
                <img src={todos.img== undefined ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQML09PCY3O9e_sD3yCJSUyK_Ai157oP3Lvlg&usqp=CAU" : todos.img} className="jugador" />
              </div>{" "}
              <br />
              <br />
            </div>
          ))
        ) : (
          <div>
            <br />
            <br />
            <h1 className="derecha2"> No se encontraron elementos</h1>
          </div>
        )}
        <br />
      </div>
    </Fragment>
  );
}
