import ListaDinamica from './components/ListaDinamica';
import './App.css';

function App() {
  const nomes = ["Matheus", "Guilherme", "Renato", "Mara"];

  return (
    <div className="App">
      <ListaDinamica nomes={nomes} />
    </div>
  );
}

export default App;