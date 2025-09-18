import data from "../data/dados.json";
import Card from "../components/Cards";

export default function Pessoas() {
  return (
    <div className="app-container">
      <h2>Pessoas</h2>
      <div className="grid">
        {data.pessoas.map((p:any) => <Card key={p.id} item={p} />)}
      </div>
    </div>
  );
}