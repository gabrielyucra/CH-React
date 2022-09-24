import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);


    const addItem =(item, cantidad) =>
        {
            if(isInCart(item.id)) {
                setCartList(cartList.map(product => {
                    return product.id === item.id ? { ...product, cantidad: product.cantidad + cantidad } : product
                }));
            } else {
                setCartList([...cartList, {...item, cantidad}]);
            }
        }

    const removeItem =(id)=> setCartList(cartList.filter(product => product.id !== id))

    const clear =()=> setCartList([])
    const isInCart = (id) => cartList.find(product => product.id === parseInt(id)) ? true : false;

    return (
        <div>
            <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart}}>
                {children}
            </CartContext.Provider>
        </div>
    );
}

export default CartContextProvider;



