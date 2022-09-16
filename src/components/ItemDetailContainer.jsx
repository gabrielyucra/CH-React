import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail"
const {products} = require("../utils/products")

const ItemDetailContainer = () => {
    const[dato,setDato] = useState({})
    const [cargando, setCargando] = useState(false)


    useEffect(()=> {
        setCargando(true)
        customFetch(2000, products[4])
        .then(result => setDato(result))
        .catch(err => console.log(err))
        .finally(()=>setCargando(false))
    }, [])

    return (
        <div>
            {cargando ? <h1>Cargando...</h1> : <ItemDetail item={dato}/>}
        </div>
    );
}

export default ItemDetailContainer;
