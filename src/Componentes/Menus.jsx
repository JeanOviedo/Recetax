import React, { Fragment, useEffect, useState, useRef } from "react";
import {
  // ActionModal,
  ActionTodosMenu,
  ElAddMenu,
  ElAddToken,
  ElAddTodoEdit,
  // ActionLoading,
} from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";

// import Load from "./Load";
import Login from "./Login";
export default function Menus() {
  const todos = useSelector((state) => state.todos);
  const login = useSelector((state) => state.login);
  const loading = useSelector((state) => state.loading);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const boton = useRef(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!todos.length) {
      dispatch(ActionTodosMenu());
    }
  }, [dispatch]);

  function handleAddMenuMas() {
    dispatch(ActionTodosMenu());
  }

  function handleAddMenu(evento, datas, id) {
    evento.preventDefault();
    let dataa = localStorage.getItem("myData");
    if (!dataa) {
      dispatch(ElAddToken(datas));
      console.log(datas, "clik");
    } else {
      if (login == false) {
        dispatch(ElAddMenu(datas));
        // document.getElementById(id).style  = 'display: none ';

        const index = todos.findIndex((prod) => prod.id === id); // use id instead of index
        if (index > -1) {
          // make sure you found it
          console.log((prevState) => prevState.splice(index, 1));
          dispatch(ElAddTodoEdit(todos.filter((i) => i.id !== id)));
        }
      }
    }
  }

  return (
    <Fragment>
      <br /> {login == true ? <Login></Login> : ""}
      {modal == true ? <Modal></Modal> : ""}


      <center><button
        onClick={(event) => handleAddMenuMas(event)}
        className="buscarboton"
      >
       +Platos
      </button></center>
      <br />

      {todos.length <= 4 ? handleAddMenuMas() : ""}
      <div class="container2" key={Math.random(5)}>
        {" "}
        {/* {loading === true ? (
          <center>
            <Load></Load>{" "}
          </center>
        ) : (
          ""
        )} */}
        {console.log(todos, "TOFDOS FRONT")}
        {todos
          ? todos.map((todos) => (
              <div
                className="card"
                key={Math.random(5)}
                // onClick={(event) => handleClick(event, menus.recipes)}
              >
                <div key={Math.random(5)}>
                  <h1> {todos.title}</h1>
                  <button
                    ref={boton}
                    onClick={(event) =>
                      handleAddMenu(
                        event,
                        {
                          id: todos.id,
                          title: todos.title,
                          img: todos.img,
                          summary: todos.summary,
                          vegano: todos.vegetarian,
                          healthScore: todos.healthScore,
                        },
                        todos.id
                      )
                    }
                    className="buscarboton"
                    id={Math.random(5)}
                    id={todos.id}
                  >
                    Agregar
                  </button>
                  <p>HealthScore : {todos.healthScore}</p>
                  <br />
                  <img src={todos.img} className="jugador" />
                </div>

                <br />
                <br />
              </div>
            ))
          : !todos
          ? ""
          : ""}
        <br />
      </div>
    </Fragment>
  );
}
