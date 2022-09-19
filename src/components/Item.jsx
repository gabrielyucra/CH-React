import {Link} from "react-router-dom"

const Item = ({product}) => {
    return (
        <div className='item'>
            <img src={product.pictureUrl} alt='producto' />
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Precio ${product.price}</p>
                <Link to={`/item/${product.id}`}><button className="btn btn-primary">Detalles</button></Link>
            </div>
        </div>
    );
}

export default Item;
