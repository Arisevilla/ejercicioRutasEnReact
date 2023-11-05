import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

function Agradecimiento(){
    return(
        <div>
            <navbar>
                <Navbar/>
            </navbar>
            <header>
            <h1>Si llegaste hasta acá, gracias. Me va bien en react pero css me destruye poco a poco.</h1>
            </header>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
export {Agradecimiento}
