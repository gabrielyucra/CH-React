import { useState } from "react";

const ItemCount =()=>{

    const [cantidad, setCantidad] = useState(0);

        const restarCant= ()=>{
            if(cantidad>0){
                setCantidad(cantidad-1)
            }
        }
        const sumarCant= ()=>{
            if(cantidad<5)
                setCantidad(cantidad+1)
        }
        const cartel =()=>{
            alert(`Haz seleccionado ${cantidad} productos`)
        }

        return(
            <div>
                <div className="d-flex ">
                    <button onClick={restarCant} className="btn btn-secondary">-</button>
                    <p>{cantidad}</p>
                    <button onClick={sumarCant} className="btn btn-secondary">+</button>
                </div>
                <button onClick={cartel} className="btn btn-success">Agregar al carrito</button>
            </div>
        );
}

export default ItemCount;