import { Home } from "../src/pages/Home";
import { Route, Routes } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PokemonPage } from "./pages/PokemonPage";

function App() {
  return (
    <>
      <PokemonProvider>
        <Routes>
          <Route path="/pokemon/:id" element={<PokemonPage/>}></Route>
          <Route index element={<Home />} />
        </Routes>
      </PokemonProvider>
    </>
  );
}

export default App;
