import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {

    const ctx = useContext(CartContext);

    return (
        <div>
            <h2>I'm a cart</h2>
            <button onClick={ctx.clear}>Borrar todo</button>
            {
                ctx.cartList.map(item=> <li>{item.title}</li>
                
                
                
                )
            }
        </div>
    );
}

export default Cart;
