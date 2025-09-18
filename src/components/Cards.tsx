import type { DataItem } from "../types";
import { useFavorites } from "../context/CardsFavoritos";
import { FaHeart } from "react-icons/fa"; // icone do coração

interface CardProps {
  item: DataItem;
}

export default function Card({ item }: CardProps) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some(f => f.id === item.id);

  const handle = () => (isFavorite ? removeFavorite(item.id) : addFavorite(item));

  return (
    <div className="card">
      {"imagem" in item && <img className="card-img" src={item.imagem} alt={item.nome} />}
      {"capa" in item && <img className="card-img" src={item.capa} alt={(item as any).titulo} />}
      {"foto" in item && <img className="card-img" src={item.foto} alt={item.nome} />}

      <div style={{ paddingTop: "0.5rem" }}>
        {"nome" in item && <h3>{item.nome}</h3>}
        {"titulo" in item && <h3>{(item as any).titulo}</h3>}

        {"especie" in item && <p>Espécie: {(item as any).especie}</p>}
        {"autor" in item && <p>Autor: {(item as any).autor} — {(item as any).ano}</p>}
        {"area" in item && <p>Área: {(item as any).area}</p>}

        <button
          onClick={handle}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 10px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            cursor: "pointer",
            background: isFavorite ? "#FEE2E2" : "#F3F4F6",
            color: isFavorite ? "#DC2626" : "#111827",
            fontWeight: 500,
          }}
        >
          <FaHeart color={isFavorite ? "#DC2626" : "#6B7280"} />
          {isFavorite ? "Remover" : "Favoritar"}
        </button>
      </div>
    </div>
  );
}
