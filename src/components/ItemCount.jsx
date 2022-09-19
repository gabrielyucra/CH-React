import { useState, useEffect } from "react";

const ItemCount =({ stock = 5, initial = 1,  onAdd })=>{

    const [cantidad, setCantidad] = useState(0);

        useEffect(() => {
            setCantidad(initial);
        },[]);
    
        const sumCant = () => {
            if (cantidad < stock) {
                setCantidad(cantidad + 1);
            }
        }
        
        const restCant = () => {
            if (cantidad > initial) {
                setCantidad(cantidad - 1);
            }
        }

        return(
            <div className="count">
                <div>
                    <button onClick={restCant} className="btn btn-secondary">-</button>
                    <p>{cantidad}</p>
                    <button onClick={sumCant} className="btn btn-secondary">+</button>
                </div>
                <button onClick={() => onAdd(cantidad)} className="btn btn-success">Agregar al carrito</button>
            </div>
        );
}

export default ItemCount;