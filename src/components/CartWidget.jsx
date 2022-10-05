import { useContext } from "react";
import { CartContext } from "./CartContext";
const CartWidget = ()=>{

    const { totalProducts, cartList } = useContext(CartContext);

    while(cartList.length === 0) {
        return(
            <>
                <img className="cart-img" src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png"
                alt="logo de carrito" />
            </>
        );
    }

    return (
        <div>
            <img className="cart-img" src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png"/>
            <span className="cant-item-cart-w">{totalProducts()}</span>
        </div>
    );

}

export default CartWidget;