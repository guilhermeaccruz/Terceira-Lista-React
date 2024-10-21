import React from 'react';
import ListaDeTarefas from './components/ListaDeTarefas';

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
            <h1>Gerenciador de Tarefas</h1>
            <ListaDeTarefas />
        </div>
    );
}

export default App;
