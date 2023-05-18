import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Turma";
  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div>
  );
}
