import Card from "../components/Cards";
import { useFavorites } from "../context/CardsFavoritos";

export default function Favoritos() {
  const { favorites } = useFavorites();
  return (
    <div className="app-container">
      <h2>Meus favoritos</h2>
      {favorites.length === 0 ? <p>Nenhum card foi salvo</p> : (
        <div className="grid">
          {favorites.map(f => <Card key={f.id} item={f} />)}
        </div>
      )}
    </div>
  );
}