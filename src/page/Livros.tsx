import data from "../data/dados.json";
import Card from "../components/Cards";

export default function Livros() {
  return (
    <div className="app-container">
      <h2>Livros</h2>
      <div className="grid">
        {data.livros.map((l:any) => <Card key={l.id} item={l} />)}
      </div>
    </div>
  );
}