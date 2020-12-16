import ProductCard from '../ProductCard/ProductCard';
import './nav.css'
import './NavItem/NavItem'
import NavItem from './NavItem/NavItem'
function Nav(){
    return(
        
        <header>
            
            <div className='container'>
                <h1>ProyectoBici</h1>

                <nav>
                    <ul>
                        
                        <li>
                            <a href = '#'>Home</a>
                        </li>
                        <li>
                            <a href = '#'>Productos</a>

                        </li>
                        <li>
                            <a href = '#'>Nosotros</a>

                        </li>
                        <li>
                            <a href = '#'>Contacto</a>

                        </li>
                        <li>
                        <NavItem></NavItem>

                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        
        
    )
}

export default Nav;