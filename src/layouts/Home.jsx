import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import './home.css'
import { Content } from "../components/Content";


function Home(){
    return(
        <div className="home-container">
            <navbar>
            <Navbar/>
            </navbar>
            <header>
            <Header/>
            </header>
            <section>
                <Content/>
            </section>
            <Footer/>
        </div>
    )
}
export {Home};