import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

    const onAdd = (cantidad) => {
        alert(`Haz seleccionado ${cantidad} productos`);
    }

    return (
        <div className='item-d'>
            <img src={item.pictureUrl} alt="foto" />
            <div>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <h4>${item.price}</h4>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
}

export default ItemDetail;
