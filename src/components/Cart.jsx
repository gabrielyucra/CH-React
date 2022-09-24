import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {

    const ctx = useContext(CartContext);

    const {removeItem} = useContext(CartContext)
    return (
        <div>
            <h2>I'm a cart</h2>
            <button onClick={ctx.clear}>Borrar todo</button>
            {
                ctx.cartList.map(item=> 
                    <div>
                        <h2>{item.title}</h2> <h1>${item.price}</h1>
                        <img src={item.pictureUrl} alt="item"></img>
                        <h2>Cantidad seleccionada: {item.cantidad}</h2>
                        <h3>{item.description}</h3>
                        <button onClick={()=>removeItem(item.id)} className='btn btn-danger'>Eliminar producto</button>
                    </div>
                )
            }
        </div>
    );
}

export default Cart;
