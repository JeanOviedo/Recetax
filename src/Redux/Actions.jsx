import axios from "axios";
export const LOADING = "LOADING";
export const TODOS = "TODOS";
export const ADD_MENU = "ADD_MENU";
export const LOGIN = "LOGIN";
export const MODAL = "MODAL";


// mi let api = "2a7143debaa542baa46e7b118d95f084";
// let api = "a1de5c39128c400a880f7e8337e23bc1"
// let api = "d416b5a893204a06bf73bb8a46d70e2e"
let api = "d391dd6b7d7c47358081f54cbadbfec0"
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


export const ElAddMenu = (data) => {

    return {type: ADD_MENU, payload: data};


};

export const ElAddTodoEdit = (data) => {

    return {type: TODOS, payload: data};


};


export const Modal = (modal) => {

    return {type: MODAL, payload: modal};
}


export const ElAddToken = (email, pass) => {
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
            } else if (response.data.error) {
                dispatch({type: "LOGIN", payload: true});
                console.log(response, "LOGIN data fail");
            }


        } catch (error) {
            console.log("ERROR TOKEN", error);
            dispatch({type: "LOGIN", payload: true});
        }
    };
}
