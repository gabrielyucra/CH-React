import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
const {products} = require("../utils/products")

const ItemDetailContainer = () => {
    const[dato,setDato] = useState({})
    const [cargando, setCargando] = useState(false)
    const { id } = useParams();

    useEffect(()=> {
        setCargando(true)
        customFetch(2000, products.find(item=> item.id == id))
        .then(result => setDato(result))
        .catch(err => console.log(err))
        .finally(()=>setCargando(false))
    }, [id])

    return (
        <div>
            {cargando ? <h1>Cargando...</h1> : <ItemDetail item={dato}/>}
        </div>
    );
}

export default ItemDetailContainer;
