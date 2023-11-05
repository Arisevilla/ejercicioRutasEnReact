import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar-container">
            <ul className="navbar-list">
                <li className="navbar-li"><Link to="/">Home</Link></li>
                <li className="navbar-li"><Link to="/quienessomos">Quienes Somos</Link></li>
                <li className="navbar-li"><Link to="/productos">Productos y Servicios</Link></li>
                <li className="navbar-li"><Link to="/contacto">Formulario de Contacto</Link></li>
                <li className="navbar-li"><Link to="/agradecimiento">Agradecimiento</Link></li>

            </ul>

        </div>
    )
}

export {Navbar}