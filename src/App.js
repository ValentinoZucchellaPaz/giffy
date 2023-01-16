
import Header from "./components/Header";
import Home from './pages/Home'
// import Detail from './pages/Detail'
import { Route, Routes } from "react-router-dom";
import SearchGifs from "./pages/SearchGifs";
import ListOfGifs from "./components/ListOfGifs";



function App() {

  return (
    <section className="w-full min-h-screen h-auto bg-violet-400">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search/:keyword" element={<SearchGifs />}/>
        <Route path="/gif/:keyword/:gifId" element={<ListOfGifs />}/>
      </Routes>
    </section>
  );
}

export default App;
