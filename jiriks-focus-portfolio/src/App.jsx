import {
    Header,
    Hero,
    About,
    Footer,
    Search,
    Services,
    Gallery,
} from "./components/index";

const App = () => {
    return (
        <>
            <header>
                <section className="header-sub-container">
                    <Header />
                </section>
            </header>
            <main>
                <section className="main-sub-container">
                    <Hero />
                    <About />
                    <Services />
                    <Search />
                    <Gallery />
                </section>
            </main>
            <footer>
                <section className="footer-sub-container">
                    <Footer />
                </section>
            </footer>
        </>
    );
};

export default App;
