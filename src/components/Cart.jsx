import { serverTimestamp, doc, setDoc, collection, increment, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import {db} from "../utils/firebaseConfig"

const Cart = () => {
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
        alert(`compra exitosa , el ID de su compra es: ${newOrder.id}` )
    }

    if(cartList.length === 0) {
        return (
            <>
                <h5 className='text-center' >Carrito de compras 🛒​</h5>
                <div className='text-center mt-5'>
                    <p>No hay productos en el carrito</p>
                    <Link to="/"><button className='btn btn-secondary mt-2'>Continuar comprando</button></Link>
                </div>
            </>
        )
    }

    return (
        <div className='product-cart'>
            <div className='productos container'>
                <h2>Productos seleccionados:</h2>
                {
                    cartList.map(item =>
                        <div key={item.id} className="card mb-3" style={{ maxWidth: '540px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={item.pictureUrl} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8 center">
                                    <div className="card-body center">
                                        <h5 className="card-title">{item.title}</h5>
                                        <h6>${item.price}</h6>
                                        <p className="card-text">{item.description}</p>
                                        <h5>Cantidad seleccionada: {item.cantidad}</h5>
                                        <p className="card-text"><small>Subtotal: ${subtotalEachProd(item.id)}</small></p>
                                        <button onClick={() => removeItem(item.id)} className='btn btn-danger'>Eliminar producto</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className='aside-cart'>
                <div className='orden-compra'>

                <div className="card border-primary mb-3 " style={{ maxWidth: '15rem' }}>
                    <div className="card-header bg-transparent border-primary">
                        <h5 className="card-title text-primary text-center">Orden de compra</h5>
                    </div>
                    <div className="card-body text-primary text-center fs-4">
                        <p className="card-text">Subtotal: ${subtotalPrice()}</p>
                        <p className="card-text">IVA: ${calcIVA()}</p>
                        <h5 className="card-text fs-2">Total: ${totalPrice()}</h5>
                    </div>
                    <button onClick={createOrder} className='btn btn-success'>Terminar compra</button>
                </div>
                <button onClick={clear} className='btn btn-danger ms-5 mt-3'>Limpiar carrito</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
