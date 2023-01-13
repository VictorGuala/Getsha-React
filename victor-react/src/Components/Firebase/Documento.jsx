import React, { useEffect, useState } from "react";
import {doc,getDoc,getFirestore} from "firebase/firestore"

const Documento =() =>{
    const [product,setProduct]=useState({})
    useEffect(()=>{
        const db = getFirestore();
        const item = doc(db, "item", "qscB7hnQmnYpr1AcwBGp");
        getDoc(item).then((snapShot)=> {
            if (snapShot.exists()){
                console.log(snapShot.data())
            }else {

                console.log("El Articulo no existe");
            }
        })
    },[]);
    return(
        <h1>Documento</h1>
    )
}
export default Documento;