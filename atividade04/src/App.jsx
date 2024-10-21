import Tabela from './components/Tabela';
import './App.css';

function App() {
  const dados = [
    { id: 1, nome: "Guilherme", idade: 28 },
    { id: 2, nome: "Julia", idade: 24 },
    { id: 3, nome: "Bruno", idade: 35 },
  ];

  return (
    <div>
      <h1></h1>
      <Tabela dados={dados} />
    </div>
  );
}

export default App;
