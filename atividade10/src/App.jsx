import React from 'react';
import ImagensComAlt from './components/ImagensComAlt';
import './App.css';

function App() {
  const imagensArray = [
    { url: '', altText: 'Primeira imagem' },
    { url: '', altText: 'Segunda imagem' },
    { url: '', altText: 'Terceira imagem' }
  ];

  return (
    <div className="App">
      <ImagensComAlt imagens={imagensArray} />
    </div>
  );
}

export default App;
