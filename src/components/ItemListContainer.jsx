import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import { products } from "../utils/products";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
const ItemListContainer =(props)=>{        
    
    const[datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(false)
    
    useEffect(() => {
        setCargando(true)
        customFetch(2000, products)
            .then(response => setDatos(response))
            .catch(err=> console.log(err))
            .finally(()=>setCargando(false))
    }, []);
    
    return(
        <>
            <h1 className="text-center">{props.greeting}</h1>
            <ItemCount/>
            {cargando ? <h1>Cargando...</h1> : <ItemList items={datos}/>}
        </>
    );
}

export default ItemListContainer;