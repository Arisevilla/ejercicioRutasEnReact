import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="header-container">
            <h1 className="header-titulo">Página de Arianne</h1>
            <p className="header-text">Bienvenidos a mi página cool</p>
            <a><Link to="/">Click aquí para refrescar la página</Link></a>
        </header>
    )
}
export {Header};