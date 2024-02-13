import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import { Navbar, Hero } from "./components/index";

const App = () => {
    return (
        <>
            <header>
                <h1>
                    jiriks<span>shotz</span>
                </h1>
                <Navbar />
            </header>
            <main>
                <Hero />
                <About />
                <Services />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default App;
