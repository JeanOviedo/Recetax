import axios from "axios";
export const LOADING = "LOADING";
export const TODOS = "TODOS";

let api = "2a7143debaa542baa46e7b118d95f084";

export function ActionTodosMenu() {
  return async function (dispatch) {
    try {
      let response = await axios({
        url:
          "https://api.spoonacular.com/recipes/random?number=8&apiKey=" + api,
        method: "get",
      });

      let food = response.data.recipes.map(arr => {
        return {
          id: arr.id,
          title: arr.title,
          img: arr.image,
          summary: arr.summary
        }
      })
     
    
      let data = food;
      console.log(data,"data");
      dispatch({ type: "TODOS", payload: data });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log("ERROR POKE API SE UTILIZA JSON INTERNO", error);
    }
  };
}
