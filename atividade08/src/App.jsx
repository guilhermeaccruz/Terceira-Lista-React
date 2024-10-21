import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Exemplo de Cards</h1>

      <Card>
        <h2> Card 1</h2>
        <p>Este é o conteúdo do primeiro card.</p>
      </Card>

      <Card>
        <h2> Card 2</h2>
        <p>Este é o conteúdo do segundo card.</p>
      </Card>
    </div>
  );
}

export default App;
