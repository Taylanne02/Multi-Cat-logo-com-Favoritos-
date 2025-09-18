import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { DataItem } from "../types";

interface FavoritesContextType {
  favorites: DataItem[];
  addFavorite: (item: DataItem) => void;
  removeFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<DataItem[]>([]);

  const addFavorite = (item: DataItem) => {
    setFavorites(prev => (prev.find(f => f.id === item.id) ? prev : [...prev, item]));
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(i => i.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites deve ser usado dentro de FavoritesProvider");
  return ctx;
}