import './nav.css'
import'./components/General/Nav/NavItem/NavItem.jsx'
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
                    </ul>
                </nav>
            </div>
        </header>
        
        
    )
}

export default Nav;