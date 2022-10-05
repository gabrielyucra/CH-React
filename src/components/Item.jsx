import {Link} from "react-router-dom"

const Item = ({product}) => {
    return (
            <div className='item'>
                <div className="card text-center" style={{ width: '13rem' }}>
                    <img src={product.pictureUrl} className="card-img-top" alt="producto" />
                    <div className="card-body center">
                        <h5 className="card-title">{product.title}</h5>
                        <h4>${product.price}</h4>
                        <Link to={`/item/${product.id}`}><button className="btn btn-primary">Detalles</button></Link>
                    </div>
                </div>
            </div>
    );
}

export default Item;
