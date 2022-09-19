import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

const NavBar = ()=>
{
    return(
    <nav>
        <ul className="nav-order">
            <Link to="/"><li>ReacTienda</li></Link>
            <div className='li-order'>
                <Link to="category/32"><li>Tinchos</li></Link>
                <Link to="category/14"><li>Humildes</li></Link>
                <Link to="category/2"><li>Niños</li></Link>
            </div>
            <CartWidget/>
        </ul>
    </nav>
    );
}

export default NavBar;
