import Filho from './Filho';  
function Pai() {
  const nome = "Guilherme";  

  return (
    <div>
      <h1>Componente Pai</h1>
      <Filho nome={nome} />  
    </div>
  );
}

export default Pai;
