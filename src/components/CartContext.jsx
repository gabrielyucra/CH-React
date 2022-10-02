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

    const subtotalEachProd = (id) => {
        let index = cartList.map(product => product.id).indexOf(id);
        return cartList[index].price * cartList[index].cantidad;
    }

    const subtotalPrice = () => {
        let total = cartList.map(product => subtotalEachProd(product.id))
        return total.reduce((previousValue, currentValue) => previousValue + currentValue), 0;
    }

    const calcIVA = () => {
        return subtotalPrice() * 0.21;
    }

    const totalPrice = () => {
        return parseFloat(subtotalPrice()) + parseFloat(calcIVA());
    }

    const totalProducts = () => cartList.reduce((counter, productoActual) => counter + productoActual.cantidad, 0)

    
    return (
        <div>
            <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart,subtotalEachProd, subtotalPrice, calcIVA, totalPrice, totalProducts}}>
                {children}
            </CartContext.Provider>
        </div>
    );
}

export default CartContextProvider;



