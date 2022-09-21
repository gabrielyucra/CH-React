import { useState, useEffect } from "react";

const ItemCount =({ stock, initial,  onAdd })=>{

    const [cantidad, setCantidad] = useState(initial);

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
        const agregarCarrito = () => {
            if (cantidad !== 0) {
                alert(`Haz seleccionado ${cantidad} productos`)
                setCantidad(1);
                onAdd(cantidad)  //seteo el estado de mi otro componente con el estado del hijo
            } else {
                alert("Cantidad no valida")
                setCantidad(1);
            }
        }

        return(
            <div className="count">
                <div>
                    <button onClick={restCant} className="btn btn-secondary">-</button>
                    <p>{cantidad}</p>
                    <button onClick={sumCant} className="btn btn-secondary">+</button>
                </div>
                <button onClick={agregarCarrito} className="btn btn-success">Agregar al carrito</button>
            </div>
        );
}

export default ItemCount;