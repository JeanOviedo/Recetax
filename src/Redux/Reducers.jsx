import {
    LOADING,
    TODOS,
    ADD_MENU,
    LOGIN,
    MODAL
} from "./Actions";
const initialState = {
    todos: [],
    loading: true,
    modal: {
        visible: false,
        msg: ""
    },
    mimenu: [],
    login: ""
};

export default function rooReducer(state = initialState, action) {
    switch (action.type) {


        case TODOS:
            return {
                ... state,
                todos: action.payload


            };

        case LOADING:
            return {
                ... state,
                loading: action.payload
            };

        case MODAL:
            return {
                ... state,
                modal: {
                    visible: action.payloa,
                    msg: ""
                }
            };


        case LOGIN:
            return {
                ... state,
                login: action.payload
            };

        case ADD_MENU:

            return {
                ... state,

                mimenu: [
                    ... state.mimenu,
                    action.payload
                ],

                modal: {
                    visible: true,
                    msg: "Guardado"
                }

            }


        default:
            return state;
    }
}
