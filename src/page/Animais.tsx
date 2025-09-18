import data from "../data/dados.json";
import Card from "../components/Cards";

export default function Animais() {
  return (
    <div className="app-container">
      <h2>Animais</h2>
      <div className="grid">
        {data.animais.map((a:any) => <Card key={a.id} item={a} />)}
      </div>
    </div>
  );
}