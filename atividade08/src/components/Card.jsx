function Card(props) {
    const cardStyle = {
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)',
      margin: '10px',
    };
  
    return <div style={cardStyle}>{props.children}</div>;
  }
  
  export default Card;
  