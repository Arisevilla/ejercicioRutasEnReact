import { Content } from "../components/Content";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function ProductosServicios(){
    return(
        <div>
            <navbar>
            <Navbar/>
            </navbar>
            <header>
                <h1>MaribelDesing</h1>
            <a href="https://www.instagram.com/maribeldesign/?hl=es">Click para visitar catálogo</a>
            </header>
            <section>
                <Content/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
export {ProductosServicios};