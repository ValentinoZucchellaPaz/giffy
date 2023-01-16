
import Header from "./components/Header";
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom";
import SearchGifs from "./pages/SearchGifs";
import Detail from "./pages/Detail";
import SearchBar from "./components/SearchBar";
import { GifsContextProvider } from "./context/GifsContext";



function App() {

  return (
    <section className="w-full min-h-screen h-auto bg-violet-400">
      <Header />
      <SearchBar />

      <GifsContextProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search/:keyword" element={<SearchGifs />}/>
          <Route path="/gif/:keyword/:gifId" element={<Detail />}/>
        </Routes>
      </GifsContextProvider>
    </section>
  );
}

export default App;
