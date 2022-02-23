import React, {Fragment, useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import {ActionDetails} from "../Redux/Actions";
import {useParams} from "react-router";


const Details = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    const Datos = useSelector((state) => state.one);
let imgurl ="https://spoonacular.com/cdn/ingredients_100x100/"
    useEffect(() => {
        dispatch(ActionDetails(id));
    }, [dispatch, id]);
    

    return (<Fragment> 
        {console.log(Datos)}

<br></br>
<br></br>
<br></br><div className="container2 ">
{Datos.length  ? ( Datos.map((e) => 
<div className="carding"  key={e.id}>
{e.name}
<br></br>
<img src={imgurl + e.image}/>
</div>)) :"No found"}
    
       {/* { Datos.map((e) => <div key={e.id}>Test</div>)} */}

       </div> </Fragment>
    

    )
}


export default Details;
