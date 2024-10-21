function ListaDinamica(props) {
    return (
      <ul>
        {props.nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    );
  }
  
  export default ListaDinamica;
  