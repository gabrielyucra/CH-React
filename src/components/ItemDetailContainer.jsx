import { useEffect, useState } from "react";
// import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
// const {products} = require("../utils/products")
import { doc, getDoc } from "firebase/firestore";
import {db} from '../utils/firebaseConfig'

const ItemDetailContainer = () => {
    const[dato,setDato] = useState({})
    const [cargando, setCargando] = useState(false)
    const { id } = useParams();

    useEffect(()=> {
        // customFetch(2000, products.find(item=> item.id == id))
        // .then(result => setDato(result))
        // .catch(err => console.log(err))
        // .finally(()=>setCargando(false))
        setCargando(true)
        const docRef = doc(db, "products", id);
            getDoc(docRef)
                .then(result => setDato({
                    id: result.id,
                    ...result.data() 
                }))
                .finally(()=>setCargando(false))
        
    }, [id])

    return (
        <div>
            {cargando ? <h1>Cargando...</h1> : <ItemDetail item={dato}/>}
        </div>
    );
}

export default ItemDetailContainer;
