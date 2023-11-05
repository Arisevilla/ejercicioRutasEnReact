import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

function Contacto(){
    return(
        <div>
            <navbar>
                <Navbar/>
            </navbar>
            <header>
                Datos de contacto
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
export {Contacto}