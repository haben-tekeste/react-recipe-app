import GlobalStyle from "./components/GlobalStyles";
import Home from "./pages/Home";
import CuisineDetails from "./pages/CuisineDetails";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NationalCuisine from "./pages/NationalCuisine";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SearchRecipe from "./pages/SearchRecipe";

function App() {
  const [activeCuisine, setActiveCuisine] = useState("");
  return (
    <div className="App">
      <GlobalStyle />
      <Header
        setActiveCuisine={setActiveCuisine}
        activeCuisine={activeCuisine}
      />
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={<Home setActiveCuisine={setActiveCuisine} />}
          />
          <Route
            path="/recipe/:id"
            element={<CuisineDetails setActiveCuisine={setActiveCuisine} />}
          />
          <Route
            path="/cuisine/:id"
            element={<NationalCuisine setActiveCuisine={setActiveCuisine} />}
          />
          <Route
            path="/search/:id"
            element={<SearchRecipe setActiveCuisine={setActiveCuisine} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
