import NoControlado from "./components/NoControlado";
import Controlado from "./components/Controlado";


export default function App() {
  const controlado = true
  return (
    <div className="container">
      <h1>Formularios con React sin 💣</h1>
      {controlado ? <Controlado /> : <NoControlado />}
    </div>
  )
}