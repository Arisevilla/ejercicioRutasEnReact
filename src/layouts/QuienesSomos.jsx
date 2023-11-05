import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Content } from "../components/Content";

function QuienesSomos(){
    return(
        <div>
        <navbar>
        <Navbar/>
        </navbar>
        <h1>Mi nombre es Arianne Sevilla</h1>
        <section>
            <Content/>
        </section>
        <footer>
            <Footer/>
        </footer>
        </div>
    )
}
export {QuienesSomos};