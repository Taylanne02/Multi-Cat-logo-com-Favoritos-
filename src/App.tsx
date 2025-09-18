import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Animais from "./page/Animais";
import Livros from "./page/Livros";
import Pessoas from "./page/Pessoas";
import Favoritos from "./page/Favoritos";
import { FavoritesProvider } from "./context/CardsFavoritos";


export default function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/animais" replace />} />
          <Route path="/animais" element={<Animais />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/pessoas" element={<Pessoas />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}