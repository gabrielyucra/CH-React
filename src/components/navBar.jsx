import CartWidget from './CartWidget';

const NavBar = ()=>
{
    return(
    <nav>
        <ul className="nav-order">
            <li>ReacTienda</li>
            <div className='li-order'>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li> 
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </div>
            <CartWidget/>
        </ul>
    </nav>
    );
}

export default NavBar;
