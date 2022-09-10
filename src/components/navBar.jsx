import CartWidget from './CartWidget';

const NavBar = ()=>
{
    return(
    <nav>
        <ul className="nav-order">
            <li>ReacTienda</li>
            <div className='li-order'>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </div>
            <CartWidget/>
        </ul>
    </nav>
    );
}

export default NavBar;
