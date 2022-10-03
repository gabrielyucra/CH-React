import { serverTimestamp, doc, setDoc, collection, increment, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import {db} from "../utils/firebaseConfig"

const Cart = () => {

    const ctx = useContext(CartContext);

    const {cartList,removeItem, subtotalEachProd, subtotalPrice, calcIVA, totalPrice, clear} = useContext(CartContext)

    const createOrder= async()=>{

        let itemsFromDB = cartList.map(product => ({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.cantidad
        }))

        let order = {
            buyer: {
                name: "Comprador",
                phone: "123456789",
                email: "juan@juan.com"
            },
            date: serverTimestamp(),
            items: itemsFromDB,
            total: totalPrice()
        }
        console.log(order)
        const newOrder = doc(collection(db, "orders"))
        await setDoc(newOrder, order)

        cartList.forEach(async (product) => {
            const productRef = doc(db, "products", product.id)
            await updateDoc(productRef, {
                stock: increment(-product.cantidad)
            })
        });

        clear()
        alert("compra exitosa")
    }

    if(cartList.length === 0) {
        return (
            <>
                <h5 >Carrito 🛒​</h5>
                <Link to="/"><button >Continuar comprando</button></Link>
                <div >
                    <p>No hay productos en el carrito</p>
                </div>
            </>
        )
    }

    return (
        <>
            <h2>I'm a cart</h2>
            <button onClick={clear}>Borrar todo</button>
            <div>
                {
                    ctx.cartList.map(item =>
                        <div key={item.id}>
                            <h2>{item.title}</h2> <h1>${item.price}</h1>
                            <img src={item.pictureUrl} alt="item"></img>
                            <h2>Cantidad seleccionada: {item.cantidad}</h2>
                            <h3>{item.description}</h3>
                            <p>Subtotal: ${subtotalEachProd(item.id)}</p>
                            <button onClick={() => removeItem(item.id)} className='btn btn-danger'>Eliminar producto</button>
                        </div>
                    )
                }
                <div className="text-center" style={{ width: '18rem' }}>
                    <h5 >Orden de compra</h5>
                    <p >Subtotal: ${subtotalPrice()}</p>
                    <p >IVA: ${calcIVA()}</p>
                    <h5>Total: ${totalPrice()}</h5>
                    <button onClick={createOrder}>Comprar ahora</button>
                </div>
            </div>
        </>
    );
}

export default Cart;
