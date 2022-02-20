import axios from "axios";
export const LOADING = "LOADING";
export const TODOS = "TODOS";
export const ADD_MENU = "ADD_MENU";
export const LOGIN = "LOGIN";
export const MODAL = "MODAL";
export const QUITA_MENU = "QUITA_MENU";
export const ERROR = "ERROR";

// mialet api = "2a7143debaa542baa46e7b118d95f084";
//let  api = "8b8a10a2cede413daffe571c0a5be321";
//et api = "4fffe504459346578fa3ef8d6daa24ea"
// let api = "a1de5c39128c400a880f7e8337e23bc1"
// let api = "d416b5a893204a06bf73bb8a46d70e2e"
// let api = "d391dd6b7d7c47358081f54cbadbfec0"
let api = "f6b4e0c5cc98427283e493660a3e3d4c"
export function ActionTodosMenu() {
    return async function (dispatch) {
        try {
            let response = await axios({
                url: "https://api.spoonacular.com/recipes/random?number=8&apiKey=" + api,
                method: "get"
            });
            let food = response.data.recipes.map(arr => {
                return {
                    id: arr.id,
                    title: arr.title,
                    img: arr.image,
                    summary: arr.summary,
                    vegano: arr.vegetarian,
                    healthScore: arr.healthScore
                }

            })


            let data = food;
            console.log(data, "data");
            dispatch({type: "TODOS", payload: data});
            dispatch({type: "LOADING", payload: false});
        } catch (error) {
            console.log("ERROR POKE API SE UTILIZA JSON INTERNO", error);
        }
    };
}


export const QuitarDeMenu = (data) => {
    return {type: QUITA_MENU, payload: data};

};

export const ActionError = (data) => {
    return {type: ERROR, payload: data};

};



export const ElAddMenu = (data) => {

    return {type: ADD_MENU, payload: data};


};

export const ElAddTodoEdit = (data) => {

    return {type: TODOS, payload: data};


};

export const ModalNo = (modal, msg) => {

    return {type: MODAL, payload: false, msg :msg, img:"https://freesvg.org/img/1538154274.png"};
}


// export const Modal = (modal, msg) => {
//     return async function (dispatch) {
//       try {
//         dispatch({ type: MODAL, payload: modal , msg :msg, img:"https://freesvg.org/img/1538154274.png"});
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }

 export const Modal = (modal, msg) => {

   return {type: MODAL, payload: modal , msg :msg, img:"https://freesvg.org/img/1538154274.png"};
 }


export const ElAddToken = (email, pass) => {
    let dataa;
    return async function (dispatch) {
        try {
          
            let response = await axios({
                url: "http://challenge-react.alkemy.org?email=" + email + "&password=" + pass,
                method: "post",
                // auth: {
                //     email: email,
                //     password: pass
                // }

            });

          
            if (response.data.token) {

                dispatch({type: "LOGIN", payload: false});
                console.log(response, "LOGIN data true");
                localStorage.setItem('myData', response.data.token);
                console.log(localStorage.getItem("myData"), "LOCAL");
               dataa = localStorage.getItem("myData");
            } else 
            
           if  ( !response.data.token){
                dispatch({type: "LOGIN", payload: true});
                dispatch({type: "MODAL", payload: true, msg: "Ocurrio un error de credenciales"});
               
            }


        } catch (error) {
            console.log("ERROR TOKEN", error);
           
            dispatch({type: "LOGIN", payload: true});
            
            
          
        }
    };
}
