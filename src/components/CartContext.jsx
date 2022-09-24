import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);


    const addItem =(product, cantidad) =>
        {
            setCartList([...cartList, product])
        }

    const removeItem =(id)=>{
        setCartList(cartList.filter(product => product.id !== id))
    }

    const clear =()=> setCartList([])
    

    const isInCart = (id)=>{
        cartList.find(product => product.id === parseInt(id))
    }

    return (
        <div>
            <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart}}>
                {children}
            </CartContext.Provider>
        </div>
    );
}

export default CartContextProvider;



