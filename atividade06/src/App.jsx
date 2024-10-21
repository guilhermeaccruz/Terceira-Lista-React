import React from 'react';
import ParagrafoDinamico from './components/ParagrafoDinamico';

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
            <h1></h1>
            <ParagrafoDinamico isHighlighted={true}>Eu sou aluno do Proa!!</ParagrafoDinamico>
            <ParagrafoDinamico isHighlighted={false}>Eu não sou aluno do Proa.</ParagrafoDinamico>
        </div>
    );
}

export default App;
