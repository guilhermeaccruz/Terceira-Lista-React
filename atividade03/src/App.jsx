import Visibilidade from './components/Visibilidade';
import './App.css';

function App() {
  return (
    <div className="App">
      <Visibilidade isVisible={true} /> 
      <Visibilidade isVisible={false} /> 
    </div>
  );
}

export default App;
