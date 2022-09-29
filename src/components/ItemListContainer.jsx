import { useEffect, useState } from "react";
// import customFetch from "../utils/customFetch";
// import { products } from "../utils/products";
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from '../utils/firebaseConfig'


const ItemListContainer =()=>{        
    
    const[datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        setCargando(true)
        // if(id)
        // {
        //     customFetch(2000, products.filter(item=> item.categoryId == id))
        //         .then(response => setDatos(response))
        //         .catch(err=> console.log(err))
        //         .finally(()=>setCargando(false))
        // } else{
        //     customFetch(2000, products)
        //     .then(response => setDatos(response))
        //     .catch(err=> console.log(err))
        //     .finally(()=>setCargando(false))
        // }
        const fireStoreFetch = async()=>{
            let q;
            if(id){
                q = query (collection(db, "products"), where('categoryId', '==', parseInt(id)))
            }else{
                q = query (collection(db, "products"))
            }
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }))
            return dataFromFirestore
        }
        fireStoreFetch()
            .then(result => setDatos(result))
            .catch(err=> console.log(err))
            .finally(()=>setCargando(false))

    }, [id]);
    
    return(
        <>
            {cargando ? <h1>Cargando...</h1> : <ItemList items={datos}/>}
        </>
    );
}

export default ItemListContainer;