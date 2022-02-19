import React, {Fragment, useEffect} from "react";
import { // ActionModal,
    ActionTodosMenu,
    ElAddMenu,ElAddToken
    // ActionLoading,
} from "../Redux/Actions";
import {useSelector, useDispatch} from "react-redux";
import Modal from "./Modal";

// import Load from "./Load";
import Login from "./Login";
export default function Menus() {
    const todos = useSelector((state) => state.todos);
    const login = useSelector((state) => state.login);
    const loading = useSelector((state) => state.loading);
    const modal = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    useEffect(() => {
        if (! todos.length) {
            dispatch(ActionTodosMenu());
        }
    }, [dispatch]);


    function handleAddMenu(evento, datas) {
        evento.preventDefault();
        let dataa = localStorage.getItem("myData");
        if (!dataa) {
            dispatch(ElAddToken (datas));
            console.log(datas, "clik");
        } 
        
           else  {
               if (login==false) {
                dispatch(ElAddMenu(datas));     
               }
           
           } 
        
        
       
        
    }

    return (<Fragment>
        <br/>
        {login == true? <Login></Login> : ""}
        {modal == true? <Modal></Modal> : ""}
        <div class="container2"
            key={
                Math.random(5)
        }> {/* {loading === true ? (
          <center>
            <Load></Load>{" "}
          </center>
        ) : (
          ""
        )} */}


            {
            console.log(todos, "TOFDOS FRONT")
        }
            {
            todos ? todos.map((todos) => (<div className="card"
                key={
                    Math.random(5)
                }
                // onClick={(event) => handleClick(event, menus.recipes)}
            >
                <div key={
                    Math.random(5)
                }>
                    <h1> {
                        todos.title
                    }</h1>
                    <button onClick={
                            (event) => handleAddMenu(event, {
                                id: todos.id,
                                title: todos.title,
                                img: todos.img,
                                summary: todos.summary,
                                vegano: todos.vegetarian,
                                healthScore: todos.healthScore
                            })
                        }
                        className="buscarboton">Agregar</button>
                    <p>HealthScore : {
                        todos.healthScore
                    }</p>
                    <br/>
                    <img src={
                            todos.img
                        }
                        className="jugador"/>

                </div>


                <br/>
                <br/>
            </div>)) : ! todos ? "" : ""
        }
            <br/>
        </div>
    </Fragment>);
}
