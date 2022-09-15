
const Item = ({producto}) => {
    return (
        <div className='item'>
            <img src={producto.pictureUrl} alt='producto' />
            <div>
                <h3>{producto.title}</h3>
                <p>{producto.description}</p>
                <p>Precio ${producto.price}</p>
                <button className="btn btn-primary">Detalles</button>
            </div>
        </div>
    );
}

export default Item;
