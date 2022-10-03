import React from 'react';
import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import { CartContext } from './CartContext';

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);

    const {addItem} = useContext(CartContext);

    const onAdd = (cantidad) => {
        setItemCount(cantidad)
        addItem(item, cantidad)
    }

    return (
        <div className='item-d'>
            <img src={item.pictureUrl} alt="foto" />
            <div>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <h4>${item.price}</h4>
                <h4>Stock: {item.stock}</h4>
                {
                    itemCount === 0
                    ? <ItemCount initial={itemCount} stock={item.stock} onAdd={onAdd} />
                    : <Link to="/cart"><button className="btn btn-dark">Revisar el carrito</button></Link>
                }
            </div>
        </div>
    );
}

export default ItemDetail;
