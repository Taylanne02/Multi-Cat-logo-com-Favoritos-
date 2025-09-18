import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#1E293B"}}>
      <div className="app-container">
        <Link to="/animais">Animais</Link>{" | "}
        <Link to="/livros">Livros</Link>{" | "}
        <Link to="/pessoas">Pessoas</Link>{" | "}
        <Link to="/favoritos">Meus favoritos</Link>
      </div>
    </nav>
  );
}