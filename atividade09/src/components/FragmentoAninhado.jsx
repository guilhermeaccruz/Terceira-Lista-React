import React from 'react';

function FragmentoAninhado() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Título do Fragmento</h1>
      <>
        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
          <li>nike</li>
          <li>adidas</li>
          <li>puma</li>
        </ul>
        <p style={{ textAlign: 'center' }}>Essas são 3 marcas de tênis.</p>
      </>
    </>
  );
}

export default FragmentoAninhado;

