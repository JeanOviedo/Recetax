import {LOADING, TODOS} from "./Actions";
const initialState = {
    todos: [],
    loading: true,
    modal : false,
};

export default function rooReducer(state = initialState, action) {
    switch (action.type) {

      
        case TODOS:
            return {
                ...state,
                todos: action.payload


            };

        case LOADING:
            return {
              ...state,
             loadinf: action.payload


            };

        default:
            return state;
    }
}
