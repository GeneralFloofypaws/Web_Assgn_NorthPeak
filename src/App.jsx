import "./App.css";

import Headr from "./components/Headr";
import Hero from "./components/Hero";
import Approach from "./components/Approach";
import Services from "./components/Services";
import ResultsVertScr from "./components/ResultsVertScr";
import Prices from "./components/Prices";
import Contacts from "./components/Contacts";
import FooterForPage from "./components/FooterForPage";

function App() {
    return (
        <>
            <Headr />

            <main>

                <Hero />

                <Approach />

                <Services />

                <ResultsVertScr />

                <Prices />

                <Contacts />

            </main>

            <FooterForPage />
        </>
    );
}

export default App;