import "./styles/main.css";


import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

import ScrollToTop from "./utils/scrollToTop"
import Header from "./components/header/Header";

function App() {
    return (
        <div className="App">
            <ScrollToTop/>
            <Navbar/>
            <Header/>
            <About/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
