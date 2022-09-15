import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import dataBase from "../dataBase";
import ItemList from "./ItemList";
const ItemListContainer =(props)=>{        
    
    const[productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false)
    
    useEffect(() => {
        setCargando(true)
        dataBase()
            .then(response => setProductos(response))
            .catch(err=> console.log(err))
            .finally(()=>setCargando(false))
    }, []);
    
    return(
        <>
            <h1 className="text-center">{props.greeting}</h1>
            <ItemCount/>
            {cargando ? <h1>Cargando...</h1> : <ItemList productos={productos}/>}
        </>
    );
}

export default ItemListContainer;