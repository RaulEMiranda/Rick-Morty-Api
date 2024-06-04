import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Characters } from "./pages/Characters";
import { EpisodesMain } from "./pages/EpisodesMain";
import { Contactus } from "./pages/Contactus";
import { Personajes } from "./components/Personajes";
import { Episodes } from "./components/Episodes";
import { EpisodesProvider } from "./context/EpisodesContext";
import { Episode } from "./components/Episode";
import { CharactersProvider } from "./context/CharactersContext";

function App() {
  return (
    <>
      <EpisodesProvider>
        <CharactersProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/characters" element={<Characters />}>
                <Route index element={<Personajes />} />
                <Route path=":id" element={<Personajes />} />
              </Route>
              <Route path="/episodes" element={<EpisodesMain />}>
                <Route index element={<Episodes />} />
                <Route path=":id" element={<Episode />} />
              </Route>
              <Route path="/contact-us" element={<Contactus />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CharactersProvider>
      </EpisodesProvider>
    </>
  );
}

export default App;
